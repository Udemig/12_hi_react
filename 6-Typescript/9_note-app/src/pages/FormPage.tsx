import React, { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  useAppSelector,
  useAppDispatch,
  createNote,
  updateNote,
} from "../redux";
import type { Note } from "../types";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import "../styles/markdown-editor.css";
import ReactMarkdown from "react-markdown";
import TagSelector from "../components/TagSelector";
import { toast } from "react-toastify";

const FormPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const notes = useAppSelector((state) => state.notes.notes);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [availableTags, setAvailableTags] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [formError, setFormError] = useState("");
  const [previewMode, setPreviewMode] = useState(false);

  // Düzenleme mi yoksa oluşturma modu mu
  const isEditMode = Boolean(id);

  // SimpleMDE seçenekleri
  const mdOptions = useMemo(() => {
    return {
      spellChecker: false,
      autosave: {
        enabled: true,
        uniqueId: "notes-editor",
        delay: 1000,
      },
      placeholder: "İçeriği markdown formatında yazın...",
      status: ["lines", "words"],
      previewClass: [
        "bg-[var(--color-background)]",
        "p-4",
        "rounded-[var(--radius-md)]",
      ],
      toolbar: [
        "bold",
        "italic",
        "heading",
        "|",
        "quote",
        "unordered-list",
        "ordered-list",
        "|",
        "link",
        "image",
        "table",
        "|",
        "preview",
        "side-by-side",
        "fullscreen",
        "|",
        "guide",
      ] as const,
    };
  }, []);

  // Tüm notlardan mevcut etiketleri çıkar
  useEffect(() => {
    const allTags = new Set<string>();
    notes.forEach((note) => {
      note.tags.forEach((tag) => allTags.add(tag));
    });
    setAvailableTags(Array.from(allTags));
  }, [notes]);

  // Edit modu için not verilerini yükle
  useEffect(() => {
    if (id) {
      const note = notes.find((note) => note.id === id);
      if (note) {
        setTitle(note.title);
        setContent(note.content);
        setSelectedTags(note.tags);
      } else {
        setFormError("Düzenlenecek not bulunamadı!");
        toast.error("Düzenlenecek not bulunamadı!", {
          position: "top-right",
          autoClose: 3000,
        });
      }
    } else {
      // Yeni not, formu temizle
      setTitle("");
      setContent("");
      setSelectedTags([]);
    }
  }, [id, notes]);

  // Yeni etiket ekle
  const handleAddTag = (tag: string) => {
    if (!selectedTags.includes(tag)) {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  // Etiket kaldır
  const handleRemoveTag = (tag: string) => {
    setSelectedTags(selectedTags.filter((t) => t !== tag));
  };

  // Form gönderimini işle
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    if (!title.trim()) {
      setFormError("Başlık alanı boş olamaz!");
      toast.error("Başlık alanı boş olamaz!", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    if (!content.trim()) {
      setFormError("İçerik alanı boş olamaz!");
      toast.error("İçerik alanı boş olamaz!", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    if (id) {
      // Mevcut notu güncelle
      const existingNote = notes.find((note) => note.id === id);
      if (existingNote) {
        dispatch(
          updateNote({
            ...existingNote,
            title,
            content,
            tags: selectedTags,
          })
        );

        // Bildirim göster
        toast.success(`"${title}" başlıklı not güncellendi`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } else {
      // Yeni not oluştur
      dispatch(createNote(title, content, selectedTags));

      // Bildirim göster
      toast.success(`"${title}" başlıklı not oluşturuldu`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }

    // İşlem tamamlandıktan sonra ana sayfaya yönlendir
    navigate("/");
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-[var(--color-text-primary)]">
            {isEditMode ? "Not Düzenle" : "Yeni Not Oluştur"}
          </h1>
          <p className="text-[var(--color-text-secondary)] mt-1">
            {isEditMode
              ? "Mevcut notunuzu güncelleyin"
              : "Fikirlerinizi ve notlarınızı kaydedin"}
          </p>
        </div>
      </div>

      {formError && (
        <div className="flex p-4 mb-6 text-[var(--color-error)] bg-[var(--color-error)] bg-opacity-10 rounded-[var(--radius-md)] border border-[var(--color-error)] border-opacity-20 animate-fade-in">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          <div>
            <span className="font-medium">Hata:</span> {formError}
          </div>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="card p-6 sm:p-8 animate-slide-up"
      >
        {/* Başlık */}
        <div className="mb-6">
          <label className="block text-[var(--color-text-primary)] text-sm font-medium mb-2">
            Başlık:
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2.5 bg-[var(--color-card)] border border-[var(--color-border)] rounded-[var(--radius-md)] text-[var(--color-text-primary)] focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-opacity-30 focus:border-[var(--color-primary)] transition-all"
            placeholder="Not başlığı"
          />
        </div>

        {/* İçerik */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <label className="block text-[var(--color-text-primary)] text-sm font-medium">
              İçerik:
            </label>
            <button
              type="button"
              onClick={() => setPreviewMode(!previewMode)}
              className="inline-flex items-center text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] transition-all text-sm font-medium px-3 py-1 rounded-full hover:bg-[var(--color-primary)] hover:bg-opacity-10"
            >
              {previewMode ? (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                  Düzenleme Modu
                </>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path
                      fillRule="evenodd"
                      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Önizleme
                </>
              )}
            </button>
          </div>

          {previewMode ? (
            <div className="border border-[var(--color-border)] rounded-[var(--radius-md)] p-5 min-h-[300px] bg-[var(--color-background)] prose max-w-none">
              <ReactMarkdown>{content}</ReactMarkdown>
            </div>
          ) : (
            <SimpleMDE
              value={content}
              onChange={(value) => setContent(value)}
              options={mdOptions}
              className="w-full markdown-editor"
            />
          )}
        </div>

        {/* Etiketler */}
        <div className="mb-8">
          <label className="block text-[var(--color-text-primary)] text-sm font-medium mb-2">
            Etiketler:
          </label>

          <TagSelector
            availableTags={availableTags}
            selectedTags={selectedTags}
            onAddTag={handleAddTag}
            onRemoveTag={handleRemoveTag}
            placeholder="Etiket ekle veya yeni oluştur..."
          />

          <p className="mt-2 text-xs text-[var(--color-text-secondary)]">
            <span className="inline-flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
              Enter tuşu ile yeni etiket ekleyebilirsiniz. Backspace tuşu ile
              son etiketi silebilirsiniz.
            </span>
          </p>
        </div>

        {/* İşlem butonları */}
        <div className="flex flex-col md:flex-row items-center justify-end gap-3 pt-4 border-t border-[var(--color-border)]">
          <Link
            to="/"
            className="inline-flex items-center justify-center w-full md:w-auto px-5 py-2.5 rounded-[var(--radius-md)] border border-[var(--color-border)] text-[var(--color-text-primary)] hover:bg-[var(--color-background)] transition-all"
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
            İptal
          </Link>

          <button
            type="submit"
            className="inline-flex items-center justify-center w-full md:w-auto px-5 py-2.5 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white rounded-[var(--radius-md)] shadow-sm transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1.5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            {isEditMode ? "Güncelle" : "Oluştur"}
          </button>
        </div>
      </form>
    </>
  );
};

export default FormPage;
