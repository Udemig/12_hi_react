# React Memorization

- React'da memorization uygulamaların performansını arttırmak için belirli işlemleri cache'e(ön bellek) alma işlemidir.

1. useMemo:

- useMemo bir işlemin sonucunu cache'e kayıt ederek bileşenin her render olması durumunda bu fonksiyonun tekrar tekrar çalışmasını ve uygulama performansı düşürmesini engeller.Genellikle kapsamlı hesaplamalar için kullanılır.

2. React.memo:

- Bir parent component içerisinde child component olduğunu varsayalım.Buradaki parent component içerisinde bir state değişimi olduğunda bu bileşen render edilir.Bu durum parent içerisindeki child elemanında her seferinde gereksiz yere render edileceği anlamına gelir.Bu durum önemli performans kayıpları yaratır.Bunu engellemek için React.memo() kullanılır.Child component React.memo() ile sarmalanır.Bu sayede child component sadece bu component'deki prop değişimine bağlı olarak renderlanır.

3. useCallBack:

- cache verilerin geçici depolandığı veri deposudur.Bu alan sık kullanılan verileri hafızasında tutar ve bize bu verilere hızlı erişme yetkinliği sunar.

- React.memo() bileşene geçilen proplar number,boolean ve string veri tipindeyse gereksiz renderlamayı önler.Ama geçilen prop bir function ise bunu bileşen her render edildiğinde farklı bir function olarak kabul ettiğinden (js kaynaklı) gereksiz renderlamayı engelleyemez.Bizde bu durumda ilgili function'ı useCallBack ile sarmalarız.Bu sayede gereksiz renderlamanın önüne geçeriz.
