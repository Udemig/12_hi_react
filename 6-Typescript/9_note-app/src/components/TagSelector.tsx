import React, { useState, useRef, useEffect } from "react";
import Tag from "./Tag";

interface TagSelectorProps {
  availableTags: string[];
  selectedTags: string[];
  onAddTag: (tag: string) => void;
  onRemoveTag: (tag: string) => void;
  placeholder?: string;
}

const TagSelector: React.FC<TagSelectorProps> = ({
  availableTags,
  selectedTags,
  onAddTag,
  onRemoveTag,
  placeholder = "Etiket ekle...",
}) => {
  const [inputValue, setInputValue] = useState("");
  const [filteredTags, setFilteredTags] = useState<string[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isFocused, setIsFocused] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Etiketleri filtrele
  useEffect(() => {
    if (inputValue.trim() === "") {
      setFilteredTags([]);
      return;
    }

    const lowercasedInput = inputValue.toLowerCase();
    const filtered = availableTags.filter(
      (tag) =>
        tag.toLowerCase().includes(lowercasedInput) &&
        !selectedTags.includes(tag)
    );

    setFilteredTags(filtered);
    setSelectedIndex(-1);
  }, [inputValue, availableTags, selectedTags]);

  // Dışarı tıklandığında dropdown'ı kapat
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
        setIsFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Etiket ekle
  const handleAddTag = (tag: string) => {
    if (tag.trim() && !selectedTags.includes(tag.trim())) {
      onAddTag(tag.trim());
      setInputValue("");
      setIsDropdownOpen(false);
      inputRef.current?.focus();
    }
  };

  // Klavye olayları
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();

      if (selectedIndex >= 0 && selectedIndex < filteredTags.length) {
        // Seçili öneriyi ekle
        handleAddTag(filteredTags[selectedIndex]);
      } else if (inputValue.trim()) {
        // Yazılan değeri ekle
        handleAddTag(inputValue);
      }
    } else if (e.key === "ArrowDown") {
      // Aşağı ok tuşu: sonraki öneriyi seç
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev < filteredTags.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === "ArrowUp") {
      // Yukarı ok tuşu: önceki öneriyi seç
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0));
    } else if (e.key === "Escape") {
      // Escape tuşu: dropdown'ı kapat
      setIsDropdownOpen(false);
    } else if (
      e.key === "Backspace" &&
      inputValue === "" &&
      selectedTags.length > 0
    ) {
      // Backspace tuşu ile son etiketi sil (input boşsa)
      onRemoveTag(selectedTags[selectedTags.length - 1]);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`
        relative
        transition-all
        duration-200
      `}
    >
      {/* Etiket giriş alanı */}
      <div
        className={`
          flex flex-wrap items-center gap-2 
          p-2.5 rounded-[var(--radius-md)]
          border border-[var(--color-border)]
          bg-[var(--color-card)]
          transition-all
          ${
            isFocused
              ? "ring-2 ring-[var(--color-primary)] ring-opacity-30 border-[var(--color-primary)]"
              : "hover:border-[var(--color-secondary)]"
          }
        `}
        onClick={() => inputRef.current?.focus()}
      >
        {selectedTags.map((tag) => (
          <Tag
            key={tag}
            label={tag}
            onRemove={() => onRemoveTag(tag)}
            size="md"
          />
        ))}

        <div className="flex-grow flex items-center min-w-[120px]">
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              setIsDropdownOpen(true);
            }}
            onFocus={() => {
              setIsDropdownOpen(true);
              setIsFocused(true);
            }}
            onKeyDown={handleKeyDown}
            placeholder={selectedTags.length === 0 ? placeholder : ""}
            className="flex-grow outline-none text-sm bg-transparent text-[var(--color-text-primary)] placeholder-[var(--color-text-secondary)]"
          />
        </div>
      </div>

      {/* Dropdown önerileri */}
      {isDropdownOpen &&
        (inputValue.trim() !== "" || filteredTags.length > 0) && (
          <div
            ref={dropdownRef}
            className="absolute z-10 w-full mt-1 bg-[var(--color-card)] border border-[var(--color-border)] rounded-[var(--radius-md)] shadow-lg max-h-60 overflow-y-auto animate-fade-in"
          >
            {filteredTags.length > 0 ? (
              <ul className="py-1">
                {filteredTags.map((tag, index) => (
                  <li
                    key={tag}
                    onClick={() => handleAddTag(tag)}
                    className={`
                      px-3 py-2 cursor-pointer text-sm
                      transition-all
                      ${
                        index === selectedIndex
                          ? "bg-[var(--color-primary)] bg-opacity-10 text-[var(--color-primary)]"
                          : "hover:bg-[var(--color-background)] text-[var(--color-text-primary)]"
                      }
                    `}
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            ) : (
              inputValue.trim() !== "" && (
                <div className="p-3">
                  <span className="block text-[var(--color-text-secondary)] text-sm mb-2">
                    Yeni etiket oluştur:
                  </span>
                  <button
                    onClick={() => handleAddTag(inputValue)}
                    className="flex items-center text-[var(--color-primary)] text-sm font-medium hover:text-[var(--color-primary-hover)] transition-all"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    "{inputValue}"
                  </button>
                </div>
              )
            )}
          </div>
        )}
    </div>
  );
};

export default TagSelector;
