# Unit Test İçin Kütüphaneler

- "@testing-library/jest-dom": "^6.6.3",
- "@testing-library/react": "^16.3.0",

# Selectors - Seçici Methodları

- Screen nesnesi aracılığı ile erişilen methodlardır.
- Test içerisinde renderlanan jsx elementlini çağırmaya yarar
- https://testing-library.com/docs/queries/about/
- İlk tercihimiz byRole, olmazsa diğer alternatifleri tercih ederiz.

# HTML Element Rolleri

- Çoğu html elementininn görevini temsil eden bir rolü vardır.
- Bazen etiket ismi ile aynı bazen farklı olabilir.
- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles

# Matchers - Kontrol Methodları

- Matcher'lar expect ile birlikte kullanılan bir element veya değişkeni kontrol etmek için kullanılan methodlardır.

- İki çeşit matcher vardır:
- DOM: https://github.com/testing-library/jest-dom
- Değişkenler: https://jestjs.io/docs/using-matchers
