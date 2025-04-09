# Önemli Detay

- Mevcut sayfanın yüklenmesi tamamlanmadan kullanıcıyı başka bir sayfaya yönlendirme kisityorsak uyarı almamak için `useNavigate()` fonksiyonu yerine `<Navigate />` component'ını tercih etmeliyiz

# Outlet

- Outlet component parent route içerisinde alt route'un elementini ekrana basmak için kullanılır
- Outlet componenta istediğimiz isimde prop `gönderemeyiz`.
- Sadece `context={}` propu gönderilebilir.
- Gönderilen propa alt route'larda `useOutletContext()` fonksiyonu ile erişilebilir.
