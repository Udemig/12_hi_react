# Higher Order Components

- React içerisinde yer alan HOC(Higher Order Components) yapısı ile bileşenleri kod tekrarına düşmeden oluşturabiliriz.

- Bir hoc oluşturulurken bunu self closing bir component şeklinde değilde bir Html tagi şeklinde oluştururuz.

# Context

- Birden fazla bileşende verileri yönetmek istersek bunu props aktarımı ile yapabiliriz.Ama bu aktarım sırasında veri yönetimi bizim için zorlayıcı olacaktır.Çünkü props aktarımı parent elemanda chiled'a doğru gerçekleşir.Bu sebeple tüm verileri App.jsx'de tutup sonrasında alt bileşen -> alt bileşen şeklinde props geçmemiz gerekir.Bu noktada bu zorluğun üstesinden gelmek için `Context` yapısı kullanılır.Bu yapıda App dışarısında uygulamanın herhangi bir bileşenine bağlı olmayan context yapıları oluşturulur.

# Context Yapısı Nasıl Oluşturulur ?

- İlk olarak react içerisinden createContext adında bir metot çağırılır.Sonrasında bu yapı bir değişkene atanır.

- createContext'in atandığı yapı kullanılarak bir Hoc oluşturulur.Bu component'e context içerisinde kullanılacak değerler value={{}} içerisinde verilir.

- Oluşturulan bu Hoc tüm uygulamayı(App) sarmalar.
