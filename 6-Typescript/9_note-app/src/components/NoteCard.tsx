import React from "react";
import { Link } from "react-router-dom";
import type { Note } from "../types";
import Tag from "./Tag";

interface NoteCardProps {
  note: Note;
  delay?: number;
}

const NoteCard: React.FC<NoteCardProps> = ({ note, delay = 0 }) => {
  // Not içeriğinden kısa bir özet oluştur
  const contentPreview =
    note.content?.length > 100
      ? `${note.content.slice(0, 100)}...`
      : note.content;

  // Oluşturulma tarihini formatla (varsayılan olarak şimdi)
  const formattedDate = new Date().toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "short",
  });

  const animationStyle = {
    animationDelay: `${delay * 0.1}s`,
  };

  return (
    <Link
      to={`/detail/${note.id}`}
      className="card group p-5 flex flex-col h-full animate-fade-in transform hover:scale-[1.02] transition-all"
      style={animationStyle}
    >
      {/* Başlık ve Tarih */}
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)] transition-all line-clamp-1">
          {note.title}
        </h3>
        <span className="text-nowrap text-xs text-[var(--color-text-secondary)] bg-[var(--color-background)] px-2 py-1 rounded-full">
          {formattedDate}
        </span>
      </div>

      {/* İçerik Önizlemesi */}
      <p className="text-[var(--color-text-secondary)] text-sm mb-4 flex-grow">
        {contentPreview}
      </p>

      {/* Etiketler */}
      {note.tags?.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-auto pt-2 border-t border-[var(--color-border)]">
          {note.tags.map((tag, index) => (
            <Tag key={index} label={tag} size="sm" />
          ))}
        </div>
      )}

      {/* Okuma Süresi / Bilgi Rozeti */}
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="inline-flex items-center bg-[var(--color-accent)] bg-opacity-10 text-white text-xs px-2 py-1 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
              clipRule="evenodd"
            />
          </svg>
          {Math.max(1, Math.ceil(note.content?.length / 1000))} dk
        </span>
      </div>
    </Link>
  );
};

export default NoteCard;
