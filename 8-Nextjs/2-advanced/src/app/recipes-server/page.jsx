import Link from "next/link";
import { fetchRecipes } from "@/utils/service";

// asenkron bir server component
// loading ve error stateleine gerek kalmaz oto olarak gelirler
// api istekleri daha performanslı olur (cache)
export default async function Page() {
  const { recipes } = await fetchRecipes();

  return (
    <div className="server-component min-h-screen">
      <div>
        <h1 className="text-2xl font-bold mb-10">Recipes Server</h1>
        <span className="server">Server Component</span>
      </div>

      <div className="flex flex-col gap-4 my-5">
        {recipes.map((recipe) => (
          <Link
            href={`/recipes-server/${recipe.id}`}
            key={recipe.id}
            className="flex flex-col gap-4 p-4 rounded-md border hover:bg-zinc-200/10 transition"
          >
            <h2>{recipe.name}</h2>
            <p>{recipe.cuisine}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
