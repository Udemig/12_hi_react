import { fetchRecipes } from "@/utils/service";
import NavLink from "./nav-link";

export default async function Header() {
  const { recipes } = await fetchRecipes();

  return (
    <div className="flex justify-between items-center p-5 bg-zinc-900 text-white mb-10">
      <h1 className="text-2xl font-bold font-mistery">Header</h1>

      <div className="flex gap-4 font-montserrat">
        <NavLink href="/">Anasayfa</NavLink>
        <NavLink href="/wonders">Harikalar</NavLink>
        <NavLink href="/recipes-server">Tarifler ({recipes.length})</NavLink>
        <NavLink href="/recipes-client">Tarifler (C)</NavLink>
      </div>
    </div>
  );
}
