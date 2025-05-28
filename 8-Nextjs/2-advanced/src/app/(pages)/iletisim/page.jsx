"use client";

// routing bileşenlerini app router'da next/navigation'dan import ederiz
import { useRouter } from "next/navigation";

// Client Component
// Client componentlarda kullanıcı etkileşimleri izlenir
// Client componentlarda react hookları kullanılır
export default function Page() {
  const router = useRouter();

  // router.push() -> yeni bir sayfay yönlendir (useNavigate karşılığı)
  const handleClick = () => {
    router.push("/");
  };

  // router.replace() -> mevcut sayfayı değiştir (geçmişten siler)
  const handleReplace = () => {
    router.replace("/");
  };

  // router.back() -> bir önceki sayfaya döner (history.back() karşılığı)
  const handleBack = () => {
    router.back();
  };

  // router.forward() -> bir sonraki sayfaya geçer (history.forward() karşılığı)
  const handleForward = () => {
    router.forward();
  };

  // router.refresh() -> sayfayı yeniden yükler (useEffect ile çalışır)
  const handleRefresh = () => {
    router.refresh();
  };

  console.log("İletişim sayfası render edildi");
  return (
    <div className="client-component min-h-screen">
      <div className="my-40">
        <h1 className="text-2xl font-bold mb-10">İletişim Sayfası</h1>
        <span className="client">Client Component</span>
      </div>

      <div className="flex flex-col gap-5">
        <button onClick={handleClick}>Anasayfa</button>
        <button onClick={handleReplace}>Anasayfa (Replace)</button>
        <button onClick={handleBack}>Geri</button>
        <button onClick={handleForward}>İleri</button>
        <button onClick={handleRefresh}>Yenile</button>
      </div>
    </div>
  );
}
