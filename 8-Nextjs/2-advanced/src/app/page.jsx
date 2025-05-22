// Local Image: İndirdiğimiz resim
import localImage from "@/assets/manzara.jpg";
import Image from "next/image";

export default function Home() {
  // Remote Image: İnternetten url'ini aldığımız resim
  const remoteImage =
    "https://images.pexels.com/photos/2745258/pexels-photo-2745258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  return (
    <div>
      <div>
        <h1>Local Resim (İndirdiğimiz)</h1>

        <h2>Unoptimized</h2>
        <Image src={localImage} alt="Local Image" unoptimized />

        <h2>Optimized</h2>
        <Image
          src={localImage}
          alt="Local Image"
          quality={97}
          placeholder="blur"
          priority
        />
      </div>

      <div>
        <h1>Remote Resim (İnternetten aldığımız)</h1>

        <h2>Sabit Genişlik / Yükseklik</h2>
        <Image src={remoteImage} alt="manzara" width={400} height={800} />

        <h2>Fill</h2>
        <div className="relative h-[400px]">
          <Image src={remoteImage} alt="manzara" fill />
        </div>
      </div>
    </div>
  );
}
