# React Nedir?

- React facebook tarafından oluşturulmuş açık kaynaklı javascript tabanlı bir kütüphanedir.

# Bir React Uygulaması Nasıl Oluşturulur?

- Terminalde uygulamanın oluşturlması istenen konuma cd ile konumlandıktan sonra `npx create-react-app [proje adı]` komutu kullanılır ve bir react uygulaması oluşturulur.

- Bu komut sayesinde bizim için bazı dosyalardan oluşan bir template gelir.

# React Uygulamasındaki Dosyalar Ve Klasör Yapısı

1. `node-modules`: Projenin bağımlılıklarını tutan dosyadır.İndirilen paketlere bağlı olarak gerekli bağımlılıklar bu dosya içerisinde tutulur.Bu dosya içerisine kesinlikle elle müdahele yapmayacağız.Paket indirme,silme işlemlerini bazı komutlar vasutasıyla yapacağız.

2. `public`: Projedeki herkes tarafında erişilebilecek dosyaları bir arada tutan klasördür.index.html,resimler,...

3. `src`:

4. `.gitignore`: Proje githuba gönderildiğinde pushlamak istemediğimiz dosyaları gitignore içerisine yazarız bu sayede ilgili dosyalar githuba pushlanmaz.

5. `package.json:` Projede kullanılan kütüphaneleri,projenin bağımlılıklarını proje içerisinde kullanılan bazı komutların yazılı olduğu dosyadır.

6. `package-lock.json`: Proje bağımlılıklarının daha detaylı(sürüm,lisans,vs...) şekilde yazıldığı dosyadır.

7. `src`: Source- Yani uygulamanın geliştirilmesi noktasında kullanılan klasördür.

-- App.css // index.css ==> Stillendirme

-- App.js ==> Varsayılan olarak oluşan bu dosya ekranda render edilecek contenti belirler.

-- index.js ==> React uygulamasının temel bileşenidir.Bu dosya app.js içerisinde oluşturulan yapıların render edilmesini sağlar.

# React Uygulaması Nasıl Ayağa Kaldırılır ?

- `npm start` komutu terminalde çalıştırılır bu sayede react uygulaması ayağa kaldırılır.

# Jsx Nedir?

- Jsx bir dosya içerisinde hem html hemde js kodlaması yapmamıza olanak sağlan bir yapıdır.Js'İn dinamik kodlarını {} ler içerisinde yazarız.

- Html-Jsx Farkı ?

- class yerine className kullanılır
- label kısmındaki for yapısı yerine HtmlFor kullanılır
- img,input,... gibi self-closing etikelerinde / kullanılması zorunludur.
- Jsx uzantılı dosyalarda bir adet parent element bulunmalıdır.

# Stillendirme Nasıl Yapılır ?

- Html'de olduğu üzere buradada satır içi ve harici dosyada stillendirme yapılabilir.
- Eğer satır içerisinde stillendirme yapılacaksa bunu style={} içerisinde yaparız.Fakat gerekli stillendirme bir obje oluşturulup bunun içerisinde yapılır.

- Harici dosyada stillendirme yapılacaksa bunu .css uzantılı bir dosyada yapar ve bu dosyayı jsx dosyasına import ederiz

# React Component Yapısı:

- React component tabanlı bir mimariye sahiptir.Uygulamayı farklı farklı componentler ile oluştururuz.

- Bir react componenti oluştururken bir js fonkisyonu yazılır.Bu fonksiyon içerisinde return () yapısı oluşturulur.Buradaki () içerisinde html kodlaması yapılır.

- Eğer bu komponent içerisinde js özellikleri değişken,obje,fonksiyon tanımlanacaksa bunu return kısmının dışında yapmamız gerekir.

# React projesine bir paket nasıl indirilir ?

- React projesine bir paket indirebilmek için npm'e sahip olamamız gerekir.Bu yapı bizim indireceğimiz paketleri yönetimini sağlan bir paket yöneticisidir.

- `npm install [paket-adı]` veya `npm i [paket-adı]` belirtiilen paket projeye dahil edilir.

- `npm install [paket-adı]@[istenilen sürüm ]` veya `npm i [paket-adı]@[istenilen sürüm ]` ile bir paketin spesifik sürümü indirilir.Bu şekilde bir paketin sürümüde güncellenebilir.

- Eğer bir paket silinmek isteniyorsa bunu `npm uninstall [paket adı]` komutuyla yaparız.

# Koşullu Renderlama

- Render: Ekrana bir contentin basılmasıdır.

- Koşullu renderlama nedir ? Renderlama işleminin bir koşula bağlı olarak yapılması işlemidir.

- Koşullu renderlama yaparken iki yöntem kullanılır:

1. Ternary Operatör(? :):

- Bu yöntemle koşullu renderlama yapılırken ilgili koşulun sağlanmaması durumunundada bir contentin renderlanması sağlanır.

2. Ve Operatörü (&&):

- Bu yöntemde koşul sağlanırsa renderlama yapılır ama koşul sağlanmıyorsa renderlama yapılmaz

# Props:

- React'da componentlerin dinamik şekilde kullanılması için props kullanılır.Bu kavram sayesinde ilgili component dinamik şekilde kullanılır.

- Bir elemanı props ile dinamik hale getirirken ilk olarak bu propsu bu bileşene geçeriz.Sonrasında bileşen içerisinde bu propsu alır ve gereken yerde renderlarız.

# Çoklu Renderlama

- Birden fazla elemanı renderlama işlemine çoklu renderlama denir.

- Çoklu renderlama işleminde react renderlanan her eleman için bizden benzersiz bir key değeri ister.Bu key değeri reactın VDOM(SANAL DOM) oluşturması noktasında elemanları birbirinden ayırmak için kullanılır.

# State

- React'da uygulama içerisinde meydana gelen bir değişime bağlı olarak ekranın güncellenmemesi bizim için sıkıntı oluşturmaktadır.Bunu çözmek için state kullanılır.

- State ile bir bileşende veri tutma ve bu veriyi yönetme yetkinliği kazanırız.

# State Nasıl Kullanılır ?

- Statei kullanmamız için ilk olarak react içerisinden useState import edilir.Sonrasında bu yapını kurulumu sağlanır.Kurulum yapılırken bir dizi tanımlanır.Bu dizi birinci değer olarak statei ikinci değer olaraksa bu statei güncelleyecek fonksiyonu yazmamızı ister.
