# Next.js Routing

- Bir next.js projesinde routing için 2 farklı yöntem kullanılabilir.
- App Router (yeni yöntem): - v14 ile beraber geldi
- Page Router (eski yöntem): - v13 ve öncesi için kullanılıyor

## App Router

- Dosya dizinine göre klasör tabanlı sayfalama yapar
- Bütün sayfalar /src/app/ sayfası altında olmalıdır
- /app içerisinde tanımlanan ve içerisinde page.jsx dosyası olan klasörler otomatik olarak sayfa olarak tanımlanır.
- page.jsx dosyası içerisinde bir react componentı export edilir.
- page.jsx dosyasını kapsayan klasörün adı sayfanın adı olur

## Nested Routes - İç İçe Yollar

- örn:
- /profile > profili görüntüle
- /profile/setting > profil ayarları
- /profile/edit > profil düzenle

## Dynamic Routes - Dinamik Yollar

- [] ile parametre tanımı yapabiliyoruz

- /products/1 > ürün detayı
- /products/2 > ürün detayı
- /products/3 > ürün detayı

## Link

- Yönlendirme için kullanırız.
- href ile yönlendirielecek url'i belirleriz
- "." ile bir önceki sayfaya yönlendiririz

## Route Group

- Proje içerisindeki sayfa sayısı arttıkça daha organzie olabilmek için sayfaları gruplandırmak isteyebiliriz.
- Yazdığımız sayfaların daha kolay erişilebilr olmasını sağlarız
- Url' e etki etmesini istemediğimiz klasörleri `()` içine alırız

## Metadata

- SEO açısından metadataları tanımlamak önemlidir.
- Sayfaların metadata dediğimiz tarayıcıyı öne çıkarmak için ihtiyacıolan başlık/açıklama/logo gibi değerleri react'da sabit bir şekilde bütün sayfalarda aunı olucak şekilde tanımlarken nextjs'de ise her sayfaya özel farklı metadata tanımlayabiliyoruz
