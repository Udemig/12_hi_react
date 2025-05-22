"use client";

// Error component'ları "use client" ile işaretlenmeli.
// Error component bir sayfada hata oldupunda oto. olarak ekrana basılır
// error ve reset prop'larını alır
// error: hata bilglerini içerir
// reset: hata alan sayfayı yeniden yüklemek için kullanılır
export default function Error({ error, reset }) {
  return (
    <div>
      <h1>Hata oluştu!!</h1>

      <p>{error.message}</p>

      <button onClick={() => reset()}>Tekrar dene</button>
    </div>
  );
}
