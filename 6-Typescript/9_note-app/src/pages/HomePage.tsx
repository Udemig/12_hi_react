import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../redux";
import NoteCard from "../components/NoteCard";
import TagSelector from "../components/TagSelector";
import type { Note } from "../types";

/**
 * Ana Sayfa Bileşeni
 *
 * @returns Ana sayfa bileşeni
 */
const HomePage: React.FC = () => {
  // Redux store'dan notları al
  const notes = useAppSelector((state) => state.notes.notes);

  // Filtreleme state'leri
  const [searchTitle, setSearchTitle] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [availableTags, setAvailableTags] = useState<string[]>([]);

  // Tüm etiketleri topla
  useEffect(() => {
    const tags = new Set<string>();
    notes.forEach((note) => {
      note.tags.forEach((tag) => tags.add(tag));
    });
    setAvailableTags(Array.from(tags));
  }, [notes]);

  // Etiket ekle
  const handleAddTag = (tag: string) => {
    if (!selectedTags.includes(tag)) {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  // Etiket kaldır
  const handleRemoveTag = (tag: string) => {
    setSelectedTags(selectedTags.filter((t) => t !== tag));
  };

  // Filtrelenmiş notlar
  const filteredNotes = useMemo(() => {
    return notes.filter((note) => {
      // Başlık filtreleme
      const titleMatch = note.title
        .toLowerCase()
        .includes(searchTitle.toLowerCase());

      // Etiket filtreleme
      const tagMatch =
        selectedTags.length === 0 ||
        selectedTags.every((tag) => note.tags.includes(tag));

      return titleMatch && tagMatch;
    });
  }, [notes, searchTitle, selectedTags]);

  // Tüm filtreleri temizle
  const clearFilters = () => {
    setSearchTitle("");
    setSelectedTags([]);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-[var(--color-text-primary)]">
            Notlarım
          </h1>
          <p className="text-[var(--color-text-secondary)] mt-1">
            Tüm notlarınızı burada görüntüleyin ve yönetin
          </p>
        </div>

        <Link
          to="/create"
          className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-medium py-2.5 px-5 rounded-[var(--radius-md)] shadow-sm transition-all inline-flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1.5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
          Yeni Not Ekle
        </Link>
      </div>

      {/* Filtreleme bölümü */}
      <div className="card mb-8 p-5">
        <div className="flex flex-col md:flex-row gap-4 items-start">
          {/* Arama bileşeni */}
          <div className="flex-grow w-full md:w-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-[var(--color-text-secondary)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                id="title-search"
                type="text"
                value={searchTitle}
                onChange={(e) => setSearchTitle(e.target.value)}
                placeholder="Not başlığı ara..."
                className="w-full py-2.5 pl-10 pr-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-[var(--radius-md)] text-[var(--color-text-primary)] focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-opacity-30 focus:border-[var(--color-primary)] transition-all"
              />
              {searchTitle && (
                <button
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                  onClick={() => setSearchTitle("")}
                  aria-label="Aramayı temizle"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Etiket seçici */}
          <div className="w-full md:w-1/2">
            <TagSelector
              availableTags={availableTags}
              selectedTags={selectedTags}
              onAddTag={handleAddTag}
              onRemoveTag={handleRemoveTag}
              placeholder="Etiket seçin veya yazın..."
            />
          </div>

          {/* Filtre temizleme butonu */}
          {(searchTitle || selectedTags.length > 0) && (
            <button
              onClick={clearFilters}
              className="text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] transition-all px-4 py-2.5 rounded-[var(--radius-md)] border border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:bg-opacity-5 inline-flex items-center whitespace-nowrap"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1.5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Filtreleri Temizle
            </button>
          )}
        </div>
      </div>

      {/* Not listesi */}
      {filteredNotes.length === 0 ? (
        <div className="card p-10 text-center">
          {notes.length === 0 ? (
            <div className="flex flex-col items-center">
              <div className="text-6xl mb-4">📝</div>
              <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">
                Henüz not eklenmemiş
              </h2>
              <p className="text-[var(--color-text-secondary)] mb-6">
                İlk notunuzu ekleyerek başlayın ve fikirlerinizi kaydedin
              </p>
              <Link
                to="/create"
                className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-medium py-2.5 px-5 rounded-[var(--radius-md)] shadow-sm transition-all inline-flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
                İlk Notunuzu Oluşturun
              </Link>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <div className="text-5xl mb-4">🔍</div>
              <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">
                Sonuç bulunamadı
              </h2>
              <p className="text-[var(--color-text-secondary)] mb-4">
                Filtreleme kriterlerine uygun not bulunamadı
              </p>
              <button
                onClick={clearFilters}
                className="text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] font-medium"
              >
                Filtreleri temizle ve tüm notları göster
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNotes.map((note, index) => (
            <NoteCard key={note.id} note={note} delay={index} />
          ))}
        </div>
      )}

      {/* Sonuç sayısı */}
      {notes.length > 0 && (
        <div className="mt-6 text-[var(--color-text-secondary)] text-sm flex justify-between items-center">
          <p>
            <span className="font-medium text-[var(--color-text-primary)]">
              {filteredNotes.length}
            </span>{" "}
            not gösteriliyor (toplam{" "}
            <span className="font-medium text-[var(--color-text-primary)]">
              {notes.length}
            </span>
            )
          </p>
        </div>
      )}
    </>
  );
};

export default HomePage;
