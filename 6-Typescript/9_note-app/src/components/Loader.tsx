import React from "react";

interface LoaderProps {
  size?: "sm" | "md" | "lg";
  color?: string;
  className?: string;
}

const Loader: React.FC<LoaderProps> = ({
  size = "md",
  color = "var(--color-primary)",
  className = "",
}) => {
  // Size mapping
  const sizeMap = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div
        className={`${sizeMap[size]} animate-spin`}
        style={{
          borderRadius: "50%",
          borderTop: `2px solid ${color}`,
          borderRight: "2px solid transparent",
          borderBottom: `2px solid ${color}`,
          borderLeft: `2px solid ${color}`,
        }}
      ></div>
    </div>
  );
};

export default Loader;
