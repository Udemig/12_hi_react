import CallBtn from "@/components/call-btn";
import { notFound, redirect } from "next/navigation";

// Server Component
// Server componetlarda kullanıcı etkileşimleri izlenemez
// Server componentlarda react hookları kullanılamaz
// Eğer bir server component içerisinde client component'ın yapabileceiği bir işlemi yapmamız gerekiyorsa bürtün component'u client component yapmak yerine sadece ilgili bölümü client component yapmak daha avantajlıdır.
export default function Page() {
  const user = { role: "user" };

  if (user.role !== "admin") {
    // yönlendirme yapılır
    //! redirect("/");
    //--------------------------------
    // 404 sayfasını renderler
    //! notFound();
  }

  return (
    <div className="server-component min-h-screen">
      <div className="my-40">
        <h1 className="text-2xl font-bold mb-10">Hakkımızda Sayfası</h1>
        <span className="server">Server Component</span>
      </div>

      <div>
        <CallBtn />
      </div>
    </div>
  );
}
