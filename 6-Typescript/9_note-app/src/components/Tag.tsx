import React from "react";

interface TagProps {
  label: string;
  onRemove?: () => void;
  variant?: "default" | "outlined" | "filled";
  size?: "sm" | "md" | "lg";
}

const Tag: React.FC<TagProps> = ({
  label,
  onRemove,
  variant = "default",
  size = "md",
}) => {
  // Boyut sınıflarını belirle
  const sizeClasses = {
    sm: "text-xs py-0.5 px-2",
    md: "text-sm py-1 px-3",
    lg: "text-base py-1.5 px-4",
  };

  // Varyant sınıflarını belirle
  const variantClasses = {
    default: "bg-[var(--color-primary)] bg-opacity-10 text-white",
    outlined: "border border-[var(--color-primary)] text-white",
    filled: "bg-[var(--color-primary)] text-white",
  };

  // Font kalınlığı ve köşe yuvarlatma
  const baseClasses =
    "font-medium rounded-full inline-flex items-center justify-center transition-all";

  // Hover efekti
  const hoverClasses = onRemove ? "hover:bg-opacity-20" : "";

  return (
    <span
      className={`
        ${baseClasses} 
        ${sizeClasses[size]} 
        ${variantClasses[variant]} 
        ${hoverClasses}
      `}
    >
      {label}

      {onRemove && (
        <button
          onClick={onRemove}
          className={`
            ml-1.5 
            ${size === "sm" ? "text-xs" : "text-sm"} 
            hover:bg-opacity-20 
            focus:outline-none
            font-bold
          `}
          aria-label={`${label} etiketini kaldır`}
        >
          ×
        </button>
      )}
    </span>
  );
};

export default Tag;
