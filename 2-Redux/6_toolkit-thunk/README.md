# Thunk

- Aksiyonlar'ın asenkron işlemler yapmasını sağlayan bir redux middleware'i (arayazılım)
- Aksiyonlar'ın içierisnde api isteği atıp gelen cevabı reducer'a gönderebiliyoruz.

- Klasik redux'ta thunk'ı 2 fonksiyonu içe içer yazarak kullandığımız bir syntax vardı.
- Thunk kullanımı toolkit ile birlikte daha sade bir hale geldi

# Toolkit Thunk

- Toolkit Store'u içersinde entegre thunk ile gelir yani ekstra kurulum gerekmez
- Thunk kullanımı toolkit daha sadece ve anlaşılı bir hale geldi.
- createAsyncThunk fonksiyonu araclığı ile asenkron thunk aksiyonları oluşturabiliyoruz
