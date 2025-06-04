import { FC } from "react";
import DoughnutGraph from "../graphics/doughnut-graph";
import { getProducts } from "@/utils/service";

const CategoryChart: FC = async () => {
  // api'dan ürünleri getir
  const products = await getProducts();

  // ürünlerin kategorilerini al (benzersiz)
  const labels = [...new Set(products.map((product) => product.category))];

  // her kategoride kaç adet ürün olduğunu hesapla
  const categoryCounts: Record<string, number> = {};

  products.forEach((product) => {
    categoryCounts[product.category] =
      (categoryCounts[product.category] || 0) + 1;
  });

  // ürünlerin kategorilerine göre grafik verilerini oluştur
  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: Object.values(categoryCounts),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
      },
    ],
  };

  return (
    <div className="bg-white rounded-lg p-5 shadow-md">
      <h2 className="subtitle mb-5">Kategoriler</h2>

      <DoughnutGraph data={data} />
    </div>
  );
};

export default CategoryChart;
