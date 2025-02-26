# State Nedir ?

- State: Uygulamamızdaki bileşenler verilerimizi yönetmek için kullanılan yapılardır.

- Bir uygulama içerisinde birden fazla bileşen olduğunda bu bileşenler arasında veri alışverişi gerekir.Bu durumda ise `Prop` kullanılır.Bu propların birden fazla bileşen arasındaki aktarımına ise `Prop drilling` denir.

- Prop driling bizim için bileşenler arasında küçük veri aktarımı için yeterli olsada bileşen sayısının artması durumunda içinden çıkılmaz bir hal alacaktır.Bu durumda ise useContext yapısı ile tanıştık.

- useContext bizim için uygulamamızdan bağımsız veri depoları oluşturmamız sağlar.Bu sayede uzun uzun prop drilling yapmamıza gerek kalmaz.Ama proje boyutunun artması durumunda useContext bizim için hem performans hemde sürekli App'i provider ile sarmamız gerektiğinden sıkıntı yaratmaktadır.Bu durumda ise global state managment olarak en popüler kütüphane olan redux ile tanışacağız.

# Redux'un artıları

- Kod tekrarını önler
- Daha performanslı uygulamalar oluşturmamızı sağlar
- Bileşenlerdeki karışıklığı engeller
- Merkezi yönetim sunar
- Hata ayıklama noktasında gelişmiştir

# Redux Yapısı

1. Store: Uygulamadaki tüm reducerları bir arada tutarak tek bir merkezden ulaşılmasını sağlayan state deposudur.

2. Reducer: Kendisine verilen action'a göre state'in nasıl güncelleneceğine karar veren fonksiyon.

3. Action: State'in nasıl değişeceğini belirleyen yapı.

Action bizden iki değer ister.

- type: Action'ın görevini tanımlayan string değer
- payload: type'ın yanında iletilen state'i güncelleyecek veri

4. Dispatch: Action'ı reducer'a ileten aracı

5. Subscribe: Store'daki verilere erişme yöntemi

6. Provider: Store'da tutulan verileri uygulamaya sağlayan HOC
