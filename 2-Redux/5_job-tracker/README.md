# Debounce

- Debounce, bir işlemin belirli bir süre boyunca tekrar tekrar tetiklenmesini önleyerek yalnızca son çağrıyı çalıştıran bir tekniktir. Genellikle hızlı bir şekilde tetiklenen olayları (örneğin, klavyeye yazma, pencere boyutlandırma veya fare hareketleri) optimize etmek için kullanılır.

### 📌 Nasıl Çalışır?

- Belirli bir süre belirlenir (örneğin, 300ms).
  Fonksiyon çağrıldığında bir zamanlayıcı başlatılır.
  Eğer belirlenen süre içinde fonksiyon tekrar çağrılırsa, önceki çağrı iptal edilir ve zamanlayıcı yeniden başlatılır.
  Ancak belirlenen süre dolarsa, fonksiyon çalıştırılır.
  Bu sayede gereksiz hesaplamaların veya ağ isteklerinin önüne geçilir.
