// api isteğini atan fonksiyon
// revalidate: 60 => 60 saniye sonra cache temizlenir
// api isteği atıldıktan sonra gelen cevap cache'e kaydedilir
// 60 saniye boyunca aynı adrese yapılan bütün api istekleri verileri cache'den alır
// 60 saniye sonra cache temizlenir ve atılan istek tekrar api'dan veri alır

const fetchRecipes = async () => {
  const res = await fetch("https://dummyjson.com/recipes", {
    next: { revalidate: 60 },
  });

  return res.json();
};

const fetchRecipe = async (id) => {
  const res = await fetch(`https://dummyjson.com/recipes/${id}`, {
    next: { revalidate: 60 },
  });

  return res.json();
};

export { fetchRecipes, fetchRecipe };
