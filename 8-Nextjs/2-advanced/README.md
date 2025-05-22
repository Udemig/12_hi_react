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
