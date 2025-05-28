import { fetchRecipe } from "@/utils/service";
import Image from "next/image";
import Link from "next/link";

async function Page({ params }) {
  // urldeki parametreye eriş
  const { id } = await params;

  // api'dan veriyi al
  const data = await fetchRecipe(id);

  return (
    <div className="flex flex-col items-center p-5 my-5 gap-4">
      <Link href="/recipes-server">Geri</Link>

      <h1 className="text-amber-700">{data.name}</h1>

      <Image
        src={data.image}
        alt={data.name}
        width={300}
        height={300}
        className="h-auto rounded-md"
      />

      <div>
        <h1 className="text-green-500">Malzemeler</h1>
        <ul>
          {data?.ingredients?.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Page;
