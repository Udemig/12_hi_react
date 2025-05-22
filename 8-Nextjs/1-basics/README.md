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

# Layout - Düzen Bileşeni

- Bütün uygulamanın / sayfa grubunun genel sayfa düzenini ve ortak bileşenlerini tanımlamamızı sağlar
- `RootLayout`'da yapılan değişiklikler projedeki tüm sayfalara etki eder ama bazen sadece bir route grubundaki sayfaların ortak componentlarını tanımlamak isteyebiliriz bu durumda o route grubuna özel bir layout oluştururuz

## Template - Düzen Bileşeni

- Layout ile aynı mantıkla çalışır.
- Layout'dan farklı olarak sayfa geçişlerinde state sıfılanır

## Özel Dosylar

- Next.js'de ismi varsayılan oalrak belirlenmiş ve özel bir amaca hizmet eden dosyalar vardır.
- `page`: Bir sayfa tanımlamaya yarar
- `layout`: Bir sayfa grubunun genel düzenini tanımlar
- `template`: Bir sayfa grubunun genel düzenini tanımlar ve sayfa geçişlerinde state sıfırlanır
- `not-found`: Sayfa bulunamadığında kullanılır
- `loading`: Sayfa yüklenirken oto. ekrana basılır
- `error`: Sayfa yüklenirken hata oluştuğunda ekrana basılır

# Catch All Segments

- URL'de 1den fazla parametre olduğu seneryoda catch all segments yöntemini kullanrak urldeki bütün parametrelere erişebiliyoruz
- `[...parametre_ismi]` syntax'i ile tanımlanır
