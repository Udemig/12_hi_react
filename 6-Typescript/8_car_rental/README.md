# Kütüphaneler

- motion
- react-paginate
- react-router-dom
- react-select
- tailwindcss

# API Kaynakları

- **Araç Verileri**
- [Open Data Soft](https://public.opendatasoft.com/explore/dataset/all-vehicles-model/api/)

- **Araç Göreselleri**
- [Imagin Studio](https://docs.imagin.studio/guides/getting-images/embedding-in-your-website)

# Proje Yayınlama Adımları

1. Projenizi Hazırlayın
2. Projeyi Githuba Yükle
3. Hosting Platformu Seç ve Deploy Et
4. Alan Adı Domain (Satın Al) ve DNS Ayarlarını Yap
5. SEO Kontrolü / İyileştirmesi

# Build (Derleme)

- Projenin dağıtıma hazır hale getirme işlemidir.
- `npm run build` minified JS ve CSS'i oluşturur

# Hosting (Barındırma)

- Frontend projesinin dosylarının (HTML,CSS,JS) internet üzerinden erişlebilir hale gelmesi için barındırıldığı sunucu

## Hosting Platformu Seçenekleri

1. Modern Çözümler

- Projeyi github reposu üzerinden tek tıkla yayınlamak istiyorsak, bu çözümleri tercih ederiz.
- Otomatik SSL sertifkası
- Otomatik CDN
- Otomatik CI/CD (Sürekli Dağıtım)

- Vercel \*
- Netlify
- AWS
- Azure
- Google Cloud
- Hostinger

2. Klasik Çözümler

- Kendi sunucumuzu kiralayıp, her şeyi kendimiz yönetmek istiyorsak tercih edebiliriz.
- VPS (Virtual Private Server)

- IBM
- Heroku
- Digital Ocean

# Deploy (Yayınlama)

- Projenin geliştirme ortamından canlı (prod) ortamına aktarma süreci
- Örnek: Github'daki kodun Vercel üzerinden yayınlaması

# Domain (Alan Adı)

- Kullanıcıların, web sitesine ulaşmak için tarayıcıya yazdığı isimdir.
- Projeyi deploy edip bir hosting sunucusna yüklediğimizde projeye bir ip (192.168.23.45) adresi üzerinden erişlebiblir.
- Bu ip adresi akılda kalıcı olmadığından ve insanlrın aratmıycağından dolayı daha akılda kalıcı ve kelimelerden oluşan adresleri tercih ederiz.
- Bu noktada kendimize bir domain adresi (alan adı) kiralamamız gerekir.

- Godaddy
- Namecheap
- İsimtescil
- Natro

# Domain Name System

- Domain adersinin doğru IP adresine yönlendiren sistemdir
- kiralican.com ===> 192.168.23.45

# SEO

- Search Engine Optimization (Arama Motoru Optimizasyonu)
- Site içeriğini arama motorlarına uygun hale getirip sitenin seo'sunu arttırarak üst sıralarda çıkmasını sağlayabiliyoruz.
- SEO etki eden bir çok faktör var:

1. Site İçeriği (anahtar kelimeler) (h1,p,b,semantik etikler)
2. Resimlerin Alt Niteliği
3. Butonların İsimlerini (name) Yaz
4. Zengin bir Title İçeriği Yaz
5. Meta Etikleri (Keyword,Description,Author)
6. Sitemap.xml + robots.txt dosyalarını oluştur
7. Inputları Label'ları ile bağla
8. 404 Sayfası Oluştur
9. Site içerisi yönlendirmeleri yap. Url'leri seo'ya uygun yap
10. Sosyal medya hesaplarını oluştur ve bağla (opengraph)

# Keyword Kontrolü

- Keyword'leri belirlerken kullanıcıların sık arattığı ve aynı zamanda rekabitin çok yüsek olmadıüı keywordleri seçersek ilk sayfada çıkma olasılığımız artar.
- Keyword kontrolü için: `https://www.semrush.com/analytics/keywordmagic/` vb siteler kullanılabilir.
