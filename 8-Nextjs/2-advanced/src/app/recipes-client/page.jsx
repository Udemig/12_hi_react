"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch("https://dummyjson.com/recipes");
        const data = await res.json();
        setRecipes(data.recipes);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="client-component min-h-screen">
      <div>
        <h1 className="text-2xl font-bold mb-10">Recipes Client</h1>
        <span className="client">Client Component</span>
      </div>

      <div className="flex flex-col gap-4 my-5">
        {recipes.map((recipe) => (
          <Link
            href={`/recipes/${recipe.id}`}
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
