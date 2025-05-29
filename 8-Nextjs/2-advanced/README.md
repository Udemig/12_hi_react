# Next.js Advanced Concepts Guide

Bu rehber, Next.js'in gelişmiş özelliklerini ve kavramlarını detaylı bir şekilde açıklamaktadır.

## 📑 İçindekiler

- [Parallel Routes](#parallel-routes)
- [Intercepting Routes](#intercepting-routes)
- [Next.js Image Component](#nextjs-image-component)
- [Rendering Yöntemleri](#rendering-yöntemleri)
- [Data Fetching](#data-fetching)
- [Import Yöntemleri](#import-yöntemleri)
- [Font Optimizasyonu](#font-optimizasyonu)
- [Next.js Metodları](#nextjs-metodları)
- [Static Site Generation (SSG)](#static-site-generation-ssg)

## Parallel Routes

Parallel Routes, birden fazla sayfayı aynı anda yüklemek için kullanılan güçlü bir Next.js özelliğidir.

### Özellikler

- Her paralel route kendi bağımsız loading/error yönetimine sahiptir
- Aynı layout içerisinde birden fazla sayfa renderlanabilir
- Koşullu rendering yapılabilir

### Kullanım

- **Slot**: `@` işareti ile tanımlanan sayfalar slot adı verilir
- Slot olarak tanımlanan sayfalar layout component'ına prop olarak geçer
- Layout component'ında slotlara erişerek aynı anda veya koşullu olarak renderlanabilir

```typescript
// layout.tsx
export default function Layout({
  children,
  analytics,
  team,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  team: React.ReactNode;
}) {
  return (
    <>
      {children}
      {analytics}
      {team}
    </>
  );
}
```

## Intercepting Routes

Önizleme sayfası oluşturmak için kullanılan bir Next.js özelliğidir.

### Amaç

- Kullanıcıyı ana akıştan koparmadan önizleme deneyimi sağlamak
- Modal tabanlı içerik gösterimi
- Kesintisiz kullanıcı deneyimi

### Kullanım Alanları

- Ürün/gönderi detay sayfaları
- Login/register sayfaları
- Galeri önizlemeleri

### Avantajlar

- Parallel routes ile birlikte kullanıldığında daha verimli
- SEO dostu URL yapısı korunur
- Hızlı navigasyon deneyimi

## Next.js Image Component

Next.js'in optimize edilmiş resim component'i.

### Avantajlar

- **Otomatik optimizasyon**: Resimler otomatik olarak optimize edilir
- **Lazy loading**: Görünüme geldiğinde yüklenir
- **Responsive**: Farklı ekran boyutları için optimize edilir
- **SEO dostu**: Alt text ve diğer SEO özellikleri desteklenir
- **Performans**: Daha hızlı yükleme süreleri

```typescript
import Image from "next/image";

<Image src="/hero.jpg" alt="Hero image" width={800} height={600} priority />;
```

## Rendering Yöntemleri

### Client Side Rendering (CSR)

**Nasıl çalışır:**

- Tarayıcı boş HTML dosyası ve JavaScript kodu indirir
- JavaScript kodu client tarafında çalışır
- HTML içeriği dinamik olarak oluşturulur

**Kullanım alanları:**

- Yoğun kullanıcı etkileşimi gerektiren sayfalar
- Dashboard uygulamaları
- SPA (Single Page Application) yapıları

### Server Side Rendering (SSR)

**Nasıl çalışır:**

- Server tarafında HTML içeriği oluşturulur
- Hazır HTML dosyası client'a gönderilir
- Daha hızlı ilk yükleme

**Avantajlar:**

1. **Performans**: Server'ın güçlü donanımı kullanılır
2. **SEO**: Arama motorları tarafından kolay indexlenir
3. **İlk yükleme hızı**: Daha hızlı First Contentful Paint

## Component Türleri

### Server Components

- Varsayılan component türü
- Server tarafında renderlanır
- React hooks kullanamaz
- Event handler'lar kullanamaz

### Client Components

- `"use client"` direktifi ile tanımlanır
- Client tarafında renderlanır
- React hooks kullanabilir
- Event handler'lar kullanabilir

```typescript
"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}
```

## Data Fetching

### Server Components'ta Veri Çekme

**Önerilen yaklaşım**: Server component'larda veri çekme

**Avantajlar:**

- **Caching**: API yanıtları otomatik olarak cache'lenir
- **Performans**: Gereksiz API istekleri önlenir
- **Paylaşım**: Aynı veri birden fazla component'ta kullanılabilir

```typescript
async function getData() {
  const res = await fetch("https://api.example.com/data");
  return res.json();
}

export default async function Page() {
  const data = await getData();

  return <div>{data.title}</div>;
}
```

## Import Yöntemleri

### 1. Absolute Import (`@`)

- `/src` klasöründen başlar
- Dosya konumu değişse bile import yolu sabit kalır
- Daha temiz ve sürdürülebilir kod

```typescript
import Component from "@/components/Component";
import { utils } from "@/lib/utils";
```

### 2. Relative Import (`./`)

- Mevcut dosyadan relative path
- Dosya hiyerarşisine bağımlı

```typescript
import Component from "./Component";
import { utils } from "../lib/utils";
```

## Font Optimizasyonu

Next.js fontları otomatik olarak optimize eder.

### Local Font

```typescript
import localFont from "next/font/local";

const myFont = localFont({
  src: "./my-font.woff2",
  display: "swap",
});
```

### Google Fonts

```typescript
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});
```

## Next.js Metodları

### Client Component Metodları

#### `useRouter`

```typescript
"use client";
import { useRouter } from "next/navigation";

const router = useRouter();
router.push("/dashboard");
router.back();
router.forward();
router.refresh();
```

#### `usePathname`

```typescript
"use client";
import { usePathname } from "next/navigation";

const pathname = usePathname(); // '/dashboard/settings'
```

#### `useParams`

```typescript
"use client";
import { useParams } from "next/navigation";

const params = useParams(); // { id: '123' }
```

#### `useSearchParams`

```typescript
"use client";
import { useSearchParams } from "next/navigation";

const searchParams = useSearchParams();
const query = searchParams.get("q"); // 'search-term'
```

### Server Component Metodları

#### `redirect`

```typescript
import { redirect } from "next/navigation";

export default function Page() {
  redirect("/login");
}
```

#### `notFound`

```typescript
import { notFound } from "next/navigation";

export default function Page() {
  notFound(); // 404 sayfasını gösterir
}
```

## Static Site Generation (SSG)

### Statik Sayfalar

- Build anında oluşturulur
- Her istekte aynı HTML sunulur
- Çok hızlı yükleme

**Kullanım alanları:**

- Hakkımızda sayfaları
- Blog yazıları
- Dokümantasyon

### Dinamik Sayfalar

#### Server Side Rendering (SSR)

```typescript
export const dynamic = "force-dynamic";

export default async function Page() {
  const data = await fetch("https://api.example.com/data");
  return <div>{data.title}</div>;
}
```

#### Incremental Static Regeneration (ISR)

```typescript
export const revalidate = 60; // 60 saniyede bir yeniden oluştur

export default async function Page() {
  const data = await fetch("https://api.example.com/data");
  return <div>{data.title}</div>;
}
```

### `generateStaticParams`

Dinamik route'ları build anında statik hale getirir.

```typescript
export async function generateStaticParams() {
  const posts = await fetch("https://api.example.com/posts").then((res) =>
    res.json()
  );

  return posts.map((post) => ({
    id: post.id,
  }));
}

export default function Page({ params }: { params: { id: string } }) {
  return <div>Post ID: {params.id}</div>;
}
```

## 🚀 Sonuç

Bu rehber Next.js'in gelişmiş özelliklerini kapsamlı bir şekilde ele almaktadır. Her özellik, modern web geliştirme ihtiyaçlarını karşılamak için tasarlanmış olup, performans, SEO ve kullanıcı deneyimi açısından önemli avantajlar sağlar.

---

**Not**: Bu döküman Next.js 13+ App Router yapısını baz almaktadır.
