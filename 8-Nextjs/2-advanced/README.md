# Parallel Routes

- Parallel Routes, birden fazla sayfayı aynı anda yüklemek için kullanılır
- Ekrana paralel routes ile basılan her sayfa kendi bağımsız loading/eror yönetimine sahiptir.

- Slot: @ işareti ile tanımlanan sayfalar slot adı veriler.
- Slot olarak tanımlanan sayfalar layout component'ına prop olarak gider.
- Layout component'ında slotlara olarak tanımlanan sayfalara erişebilir ve aynı anda veya koşullu olarak renderlayabiliriz.

# Intercepting Routes

- Önizleme sayfası oluşturmaya yarar.

- Kullanıcı bir sayfaya girmek istediğinde, o sayfaya direkt yönlendirmek yerine bir önizleme sayfasına yönlendirip (genelde modal olur) kullanıcıya kesintisiz bir deneyim sağlarız
- Bu özelliği genel olarak ürün / gönderi detay sayflarında login/register sayfalarında kullanıcyı ana ankıştan koparmamak için kullanırız.
- Parallel routes ile birlikte kullanıldığında daha verimli olur.

# Next.js Image Component

- Next.js'de resimler için optimizasyon sağlayan bir component'tir.
- Normal img etiketi yerine next.js Image component'ini kullanmalıyız.
- Next.js resimlerin daha optimize daha küçük boyutlu ve daha seo dostu olmaısını sağlar ve resimler daha hızlı yüklenir.

# Client Side Rendering (CSR) vs Server Side Rendering (SSR)

## CSR

- Client side rendering yöntemi uygulanan bir sayfaya girdiğimizde `js kodu` ve `boş html dosyası` indiriz.
- İndrilen js kodu `kendi cihazımızda` çalışır ve html içeriiğini oluşturur.

## SSR

- Sercer side rendering yöntemi uygulanan bir sayfaya girdiğimizde `dolu html html dosyası` indiriz.
- JS kodu `serverda` çalışır ve html dosyasını oluştutu client tarafında bu html dosyasu indirilip ekrana basılır

## Neden SSR kullanırız?

1. Performans: JS kodu client'da çalışıcağına donanım olarak daha güçlü olan server'da çalıştığı için client'a daha az yük bindirir.
2. SEO: SEO açısından SSR daha avantajlıdır. SSR sayfaların içeriğini serverdea oluşturduğu için arama motorları tarafından kolay indexlenebilir.

# Nasıl SSR ve CSR yönetmini kullanırız ?

Next.js'de 2 farklı component türü vardır:

1. Server Component: SSR kullanılarak renderlanır.
2. Client Component: CSR kullanılarak renderlanır.

- Next.js biz aksini belirtmedikçe her component'ı server component yapar
- Eğer bir component'ın en üstünde `use client` yazarsak bu component client component olur

- Server componentlar kullanıcı etikileşimlerini (onClick,onSubmit)... ve react hookslarını (useState,useEfect...) kullanamaz,bu yapılar kullanılması gerektiğinde client componentları tercih ederiz.

# Data Fetching

- Next.js'de veri çekme olayının server component'larda yapılması öndeirilir.
- Server componentlarda veri çektiğimiz zaman next.js api'dan gelen cevabı cache'de tutar ve aynı api isteğini tekrar attığımız zaman api'a gitmek yerine cache'deki cevabı döndürür

- Bu sayaede:
- - ilk api isteği sonrasında api'dan cevap beklemeye gerek kalmaz
- - api'a gereksiz istek gitmez
- - cache özelliği sayesinde eğer api'gelen cevabı birden fazla component'da kullanmak istiyorsak redux vb. gereke kalamdan bütün component'larda api isteğini atabiliriz.

# Next.js İmport

- Bir içeriği import ederken iki farklı yöntem kullanabiliriz:

1. `@` ile absolute import

- Bu işaret varsayılan olarak import yolunu /src klasöründen başlatır
- Bu sayede dosya konumu değiştirince hata alma ihtimalini ortadan kaldırır çünkü import yolu değişmez.

2. `./` ile relative import

- Bu import yönteminde import ediceğimiz içerik mevcut dosyadan ne kadar uzaktaysa ona göre import ederiz

# Font

- Next.js resimlerde olduğu gibi fontlarda optimize edilmiştir.
- Örneğin bir fontun sadece projede kullanılan boyutlarını import
- Bu sayede font boyutu küçülür ve daha optimizr oluyor.
- İki farklı şekilde import edilebilir.

1. Local Font

- Font dosyasının proje içerisinde bulunması gerekir.

2. Remote Font

- Font, google fonts üzerinden import edilir

# Next Methods

## useRouter

- sadece `client component` içerisinde kullanılır
- proje içerisinde yönlendirme yapmak için kullanılır
- back() | forward() | refresh() | replace()

## redirect

- sadece `server component` içerisinde kullanılır
- proje içerisinde yönlendirme yapmak için kullanılır
- redirect("/")

## notFound

- hem `server` hemde `client` componentlarda kullanırlır
- 404 sayfasını renderlar
- notFound()

## usePathname

- sadece `client component` içerisinde kullanılır
- kullanıcının bulunduğu urldeki aktif path değerini döndürür
- usePathname

## useParams

## useSearchParams

# SSG (Static Sitre Generation) & generateStaticParams
