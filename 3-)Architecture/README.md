# Yazılım Mimarisi

- Yazılım mimarisi, bir yazılım (uygulama,web sitesi,API,oyun) temel yapı taşlarını, bu yapı taşlarının birbiriyle olan etkileşimlerini, sistemdeki akışları, karar noktalarını ve performans ile süredürebilirlik gereksinimlerini kapsayan bir disiplindir.

- Yazılım mimarisi, sistemin teknik vizyonunu oluşturur ve yazılım geliştirme sürecindeki teknik kararları belirler.

## Yazılım Mimarisinin Elemanları

### 1) Bileşenler (Components)

- Mimarinim işlevsel birimlerini temsil eder.

- Kullanıcı arayüzü katmanı (UI Layer): Kullanıcı etkilşemini sağlayan katman.
- İş Mantığı Katmanı (Bussiness Logic Layer): Uygulmanın iş kararlarını içeren katman.
- Veri Erişim Katmanı (Data Acces Layer): Veritabanı ve veri yönetimi işlemlerini gerçekleştiren katman.s

### 2) Bağlantılar (Connections)

- Bileşenlerin arasında etkileşim yollarıdır.

- Frontend tarafındaki state yönetim araçları: Context, Redux, State
- API Çağrıları (API Calls): Sistem bileşenleri arasındaki iletişim için kullanılan arabirimler
- Mesajlama Sistemleri (Messaging Queue): Bileşenler arasında asenkron iletişimi sağlayana sistemler
- Veritbanı bağlantıları(Database Connection): Veri erişimi için kullanılan bağlantılar.

### 3) Tasarım Desenleri (Design Patterns)

- Sistmeni genel tasarımını belirleyen yaklaşımlardır.

- Monolithic Mimari:
  Tüm sistemin tek bir kod tabanında yazdılığı ve tek bir yerden dağıtıldığı (yayınlandığı) model.
  Örn: Bütün amozone clone'unu tek bir react projesine yazma.

- Microservices Mimarisi:
  Sistemin küçük, bağımsız servislerden oluştuğu model.
  Örn: Admin Paneli Bir Proje, Authentication Bir Proje, Ürün İşlemleri Bir Proje.

- MVC (Model-View-Controller) Mimarisi:
  Bir yazılımın 3 ayrı katamana (Model, Görünüm, Kontrolcü) üzerinden yazıldığı mimari desen

- Component Based Mimari:
  React, Vue, Angular gibi kütüphanelerde kullanlan, bileşen tabanlı mimari desen

### 4) Kalite Nitelikleri

- Sistemenden beklenen performans, ölçeklenebilirlik, güvenlik, erişilibilirlik gibi gereksinimleri ifade eder.

### 5) Teknoloji Kısıtlar

- Teknolojik ve işlevsel kısıtlamalardır.

- Kullanılacak dil veya framework.
- Bulut sağlayıcıları (AWS,AZURE,FIREBASE)

## Doğru Yazılım mimarisinin Faydaları

1. Ölçeklenebilirlik: Doğru mimari hem yatay (yeni sunucular ekleme) hem de dikey (daha güçlü donanım) kolayştırır.

2. Performans: İyi tasarlanmış bir mimiari sistemin kaynlarınını verimli kullanmamızı sağlar.

3. Bakım ve Geliştirilebilirli Kolaylaşılar

4. Ekipler Arası İşbirliği ve Verimlilik

5. Maaliyet Verimliliği

6. Yeniden Kullnılabilrlik

# S.O.L.I.D Prensipleri

- SOLID prensipleri, yazılım geliştirime sürecinde kodun daha esnik, sürdürülebilir ve bakımı kolay olmasını sağlamak için kullanılan beş temel prensibi ifade eder. SOLID, beş prensibin baş harflerinden oluşan kısaltmadır.

## Open Closed Prensible

```js
const item = {id:1,name:"Tel",price:345}

// sadece price verisini ekrana basan bir comp düşünücek olursak
// bu component'a item'In bütün değerlerini göndermek mantıksız olur
// item'ın verileren sahip olmadığımı hiç bir noktada bu component'I kullanamayız
const comp1 = (item) => (<p>{item.price}$<p>);

// bu componen ise sadece fiyat verisi aldığı için
// elimizde sayı olan her yerde bu component'ı kullanbiliriz
// yani bu daha yeniden kullanabilir ve Interface Segregation Principle uygundur
const comp2 = (price) => <p>{price}$<p>
```

# 12-Factor Uygulama İlkeleri

- Hersey Lütke & Adam Wiggins tarafından geliştirilen, bulut tabanlı (cloud-native) uygulamalar oluştururken taşınabilir, ölçeklenebilir, dayanıklı ve kolay yönetilebilir olmalarını sağlayan bir dizi prensiptir.

- Bu ilkeler özellikle microservices, containerized (Docker, Kubernetes) ve DevOps ortamlarında yaygın olarak uygulanır.

## **Sonuç**  

| İlke | Açıklama | Yanlış Kullanım |
|------|---------|----------------|
| **1. Codebase** | Tek bir repo, farklı ortamlar | Her ortam için farklı kod |
| **2. Dependencies** | Bağımlılıklar paket yöneticisinde | Global bağımlılıklar |
| **3. Config** | Configler environment variables ile yönetilmeli | Kod içinde hard-coded configler |
| **4. Backing Services** | Servisler bağımsız olmalı | `localhost` gibi sabit bağlantılar |
| **5. Build, Release, Run** | Aşamalar ayrı olmalı | Derleme ve çalıştırma aynı anda |
| **6. Processes** | Stateless olmalı | Bellekte session tutmak |
| **7. Port Binding** | Kendi sunucusunu açmalı | Dış sunucuya bağımlı olmak |
| **8. Concurrency** | İşleri paralel çalıştırmak | Tek thread içinde tüm işlemler |
| **9. Disposability** | Hızlı başlatma/kapatma | Uzun süren kapanmalar |
| **10. Dev/Prod Parity** | Tüm ortamlar benzer olmalı | Geliştirme farklı, prod farklı |
| **11. Logs** | Logları stdout’a yazmalı | Dosyalara log yazmak |
| **12. Admin Processes** | Yönetim işlemleri ayrı olmalı | Migration’ları `app.js` içinde çalıştırmak |
