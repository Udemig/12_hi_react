import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// metadata tanımlama kiçin export const metadata yöntemi kullanılır
export const metadata = {
  title: { default: "Amazon", template: "%s | Amazon" },
  description: "Amazon'da her türlü ürünü bulabilirsiniz.",
  keywords: "amazon, ürün, fiyat, ücretsiz kargo",
  authors: [{ name: "Furkan Evin" }],
  robots: {
    index: true,
    follow: true,
  },
};

// Higher order component
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="p-10 my-40 text-4xl font-bold text-center">
          {children}
        </div>
      </body>
    </html>
  );
}
