import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch, deleteNote } from "../redux";
import ReactMarkdown from "react-markdown";
import { toast } from "react-toastify";
import Tag from "../components/Tag";

/**
 * Detay Sayfası Bileşeni
 *
 * @returns Detay sayfası bileşeni
 */
const DetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // Redux store'dan notları al
  const notes = useAppSelector((state) => state.notes.notes);

  // URL'deki id ile eşleşen notu bul
  const note = notes.find((note) => note.id === id);

  // Not silme işlemi
  const handleDeleteNote = () => {
    if (id && note) {
      // Silme onayı soralım
      if (
        window.confirm(
          `"${note.title}" notunu silmek istediğinize emin misiniz?`
        )
      ) {
        dispatch(deleteNote(id));
        // Bildirim göster
        toast.success(`"${note.title}" başlıklı not silindi`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        // Ana sayfaya yönlendir
        navigate("/");
      }
    }
  };

  // Not bulunamadıysa hata mesajı göster
  if (!note) {
    return (
      <div className="card p-10 text-center">
        <div className="flex flex-col items-center">
          <div className="text-6xl mb-4">🔍</div>
          <h1 className="text-2xl font-bold text-[var(--color-error)] mb-3">
            Not Bulunamadı
          </h1>
          <p className="text-[var(--color-text-secondary)] mb-6">
            Aradığınız not bulunamadı veya silinmiş olabilir.
          </p>
          <Link
            to="/"
            className="inline-flex items-center text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] transition-all font-medium"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1.5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Üst bilgi ve işlem düğmeleri */}
      <div
        className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 animate-fade-in"
        style={{ animationDuration: "0.3s" }}
      >
        <div className="flex items-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center p-2 rounded-full text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-background)] transition-all mr-3"
            aria-label="Geri dön"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
          <h1 className="text-2xl font-bold text-[var(--color-text-primary)]">
            Not Detayı
          </h1>
        </div>

        <div className="flex gap-3">
          <Link
            to={`/edit/${note.id}`}
            className="inline-flex items-center justify-center px-4 py-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white rounded-[var(--radius-md)] shadow-sm transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1.5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>
            Düzenle
          </Link>

          <button
            onClick={handleDeleteNote}
            className="inline-flex items-center justify-center px-4 py-2 bg-[var(--color-error)] hover:bg-opacity-80 text-white rounded-[var(--radius-md)] shadow-sm transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1.5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            Sil
          </button>
        </div>
      </div>

      {/* Not içeriği bölümü */}
      <div
        className="card p-6 sm:p-8 animate-slide-up"
        style={{ animationDuration: "0.4s", animationDelay: "0.1s" }}
      >
        {/* Not başlığı */}
        <h1 className="text-3xl font-bold mb-4 text-[var(--color-text-primary)]">
          {note.title}
        </h1>

        {/* Etiketler */}
        {note.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {note.tags.map((tag, index) => (
              <Tag key={index} label={tag} variant="default" />
            ))}
          </div>
        )}

        {/* İçerik (Markdown formatında) */}
        <div className="prose max-w-none border-t border-[var(--color-border)] pt-6 mt-2">
          <ReactMarkdown>{note.content}</ReactMarkdown>
        </div>
      </div>

      {/* Alt bilgi ve meta veriler */}
      <div
        className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-[var(--color-text-secondary)] text-sm mt-2 p-2 animate-fade-in"
        style={{ animationDuration: "0.3s", animationDelay: "0.3s" }}
      >
        <p>Oluşturulma: {new Date().toLocaleDateString("tr-TR")}</p>
        <p>
          <span className="inline-flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                clipRule="evenodd"
              />
            </svg>
            Okuma süresi: {Math.max(1, Math.ceil(note.content.length / 1000))}{" "}
            dakika
          </span>
        </p>
      </div>
    </div>
  );
};

export default DetailPage;
