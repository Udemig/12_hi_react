# React Route Dom

- React router dom kütüphanesi react'ın SPA(Single Page Aplication) a uygun şekilde route'ları ifade etmemizi ve bunlar arasında geçiş yapmamızı sağlar.

# BrowserRouter:

- React router dom kütüphanesi'nin çalışması için temel bileşendir.Tüm routing yapısını kapsar.

# Routes:

- Tarayıcıdaki url değişimlerini izler ve buna göre hangi path değerindeyse buna uygun elemanı renderlar.

# Route:

- Url'e bağlı olarak render edilen herbir sayfa bir route'dur.

# Link:

- Proje içerisinde yönlendirmeyi sağlar.Bu eleman html'deki a etiketinin react router dom'daki karşılığıdır.Url'e parametre geçmek için kullanılır.

# NavLink:

- Link etiketi gibi routelar arasında geçiş yapmamızı sağlar.Ekstra olarak mevcut sayfadaki NavLink'i aldığı active clası ile özelleştirebiliriz.

# Routelar'daki ortak elemanların renderi

- Her route için renderlanacak bileşenleri teker teker import edip kullanmak yerine bunu tek bir seferde yapabiliriz.Bunu yaparkense BrowserRouter içerisinde (!Routes dışarısında) ilgili bileşen çağırılır.Bu sayede tüm route kısımlarında bu yapı kullanılabilir.

# useParams:

- url'deki parametrelere erişme ve kullanma imkanı sunar.

# Dynamic Routes:

- Bir kitap projesi düşününüz.Bu projede bulunan tüm kitaplar için birer detay sayfası olsun.Bunu her bir kitap için detay sayfası oluşturamayacağımızdan tek bir sayfayı dinamik şekilde renderlarız.Bu işleme dinamik route yapısı denir.

# Nested Routes

- Bir kapsayıcı içerisinde farklı bileşenlerin oluşturulması işlemine `Nested Routes` denir.

- Bu özellik sayesinde sadece belirtilen sayfalar için ortak özellikler gerçekleştirilir.
