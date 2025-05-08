import React from "react";
import { Link, useLocation } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  // Aktif sayfayı kontrol et
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-background)]">
      {/* Header */}
      <header className="sticky top-0 bg-[var(--color-card)] shadow-sm z-10 backdrop-blur-md bg-opacity-90">
        <div className="container mx-auto py-4 px-4 sm:px-6">
          <div className="flex items-center justify-between">
            {/* Logo ve Site Başlığı */}
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-[var(--color-primary)] text-2xl">📝</span>
              <h1 className="text-xl font-semibold text-[var(--color-text-primary)]">
                NotApp
              </h1>
            </Link>

            {/* Navigasyon */}
            <nav className="flex items-center space-x-4">
              <Link
                to="/"
                className={`py-2 px-3 rounded-full transition-all ${
                  isActive("/")
                    ? "bg-[var(--color-primary)] text-white font-medium shadow-sm"
                    : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                }`}
              >
                Notlar
              </Link>
              <Link
                to="/create"
                className={`py-2 px-3 rounded-full transition-all ${
                  isActive("/create")
                    ? "bg-[var(--color-primary)] text-white font-medium shadow-sm"
                    : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                }`}
              >
                Yeni Not
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Ana İçerik */}
      <main className="flex-grow container mx-auto py-6 px-4 sm:px-6 animate-slide-up">
        {children}
      </main>

      {/* Footer */}
      <footer className="mt-auto bg-[var(--color-card)] border-t border-[var(--color-border)]">
        <div className="container mx-auto py-4 px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[var(--color-text-secondary)] text-sm">
              &copy; {new Date().getFullYear()} NotApp - Modern not uygulaması
            </p>
            <div className="flex items-center space-x-4 mt-2 md:mt-0">
              <a
                href="#"
                className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-all text-sm"
              >
                Hakkında
              </a>
              <a
                href="#"
                className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-all text-sm"
              >
                Gizlilik
              </a>
              <a
                href="#"
                className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-all text-sm"
              >
                İletişim
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
