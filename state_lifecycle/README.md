# Bir react uygulaması ayağa kaldırılırken dikkat edilmesi gerekenler

- Bir react uygulaması ayağa kaldırılırken kullanılan `npm start` komutunın çalışabilmesi için bu kodun yazıldığı terminal package.json dosyasının bulunduğu dizinde çalıştırılmalıdır.Aksi halde hata alınacak ve uygulama ayağa kaldırılayamayacaktır.

# State

- React uygulamasında bir değerin değişmesine bağlı olarak arayüzün renderlanmasını sağlayan yapıya state denir.State ile react bileşeni içerisinde verilerimizi kolay bir şekilde yönetebiliriz.

# React Component Türleri

- React'da iki tür component bulunur.

1. Class Component
2. Function Component

- Class componentler function componentlerin atasıdır.Güncel projelerde çok kullanılmaz.Bir class component tanımlarken class kelimesi yazılır sonrasında bu class componente bir isim verilir verilen isim sonrasında extends ile react içerisindeki Component yapısı miras alınır.Bu sayede bir class component tanımlanır.Bir class componentin iki temel yapısı olur.

- i.constructor(Kurucu metot)
- Bu metot bileşene geçilecek propsların ve state yapılarını kurulumunun yapıldığı kısımdır.
- ii.render(Ekranda renderlanacak contenti belirleyen kısım)
- Bu metot bileşen içerisinde renderlanacak contenti belirleyen kısımdır.

* Class ve Function componentler arasında javascriptdeki var-- let&const arasındaki ilişkiye benzer bir ilişki bulunmaktadır.Class component güncel projelerde daha çok kod yazmamıza sebep olduğundan tercih edilmez.

# Lifecycle (Yaşam Döngüsü)

- İnsanlar doğar,gelişir ve ölürler.Bu insanların yaşam döngüsüdür.React bileşenleride tıpkı insanlar gibi bir yaşam döngüsüne sahiptir.componentDidMount,componentDidUpdate,componentWillUnmount metotları ile bir bileşenin yaşam döngüsü izlenir.
