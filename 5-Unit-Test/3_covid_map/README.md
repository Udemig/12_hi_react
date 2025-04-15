# Gerekli Kütüphaneler

- @testing-library/jest-dom
- @testing-library/react
- axios
- millify
- react-simple-maps
- react-router-dom
- react-icons
- tailwindcss
- @reduxjs/toolkit
- react-redux
- redux-thunk

# Kaynaklar

- Detay Verileri İçin: https://rapidapi.com/api-sports/api/covid-193/playground/apiendpoint_2feca6f0-0f58-40b7-9196-98c45c7d5083

- Toplam Verileri İçin: https://rapidapi.com/axisbits-axisbits-default/api/covid-19-statistics/playground/apiendpoint_191c58c7-a995-4024-a5ee-41043d79e542

- TOPOJSON: https://github.com/topojson/world-atlas?tab=readme-ov-file

# Bazı Test Methodları

- Sadece describe içerrisinde kullanıalabilen methodlar:

- beforeEach : her testin öncesinde çalışır
- afterEach : her tesin sonrasında çalışır
- beforeAll : bütün testlerin öncesinde çalışır
- afterAll : bütün testlerin sonrasında çalışır

# Selector

- Ekrandaki elementleri almak için kullandığımız seçici methodları 3 ana parçadan oluşur:

1. Method:

- Get: Ekrandaki elementi alamazsa hata fırlatır.
- Query: Ekrandaki elementi alamazsa null döndürür.
- Find: Ekrana asenkron olarak basılan elementleri almak için kullanılır.

2. All İfadesi:

- Eğerki ekrandan sorgu koşuluna uygun birden fazla element almak istiyorsak method'un devamını all ifadesini ekleriz
- All kullanırsak dönen cevap dizi formatında olur.
- getAllBy | queryAllBy | findAllBy

3. Sorgu Methodu:

- Hangi yöntemle elementi seçiceğimi belirleyen method
- ByRole
- ByLabelText
- ByPlaceholder
- ByText
- ByTitle
- ByTestId
- ByAltText
- ByDisplayValue

- Örnek
- getByTestId - getAllByTestId
- queryByTestId - queryAllByTestId
- findByTestId - findAllByTestId

# TDD - TAD

- Test Driven Development
- Koddan önce testlerin yazıldığı geliştirme yöntemidir.
- Geliştirici önce başarısız testleri yazar, sonra bu testleri geçicek kodları yazar.
- red to green test

- Test After Development
- Kod tamamlandıktan sonra testlerin yazıldığı geleneksel yöntemdir.
