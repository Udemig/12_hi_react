import { useContext } from "react";
import { ProductContext } from "../../context/productContext";

import Card from "../../components/Card";

const Home = () => {
  // ProductContext'deki verilere eriş
  const { products, selectedCategory } = useContext(ProductContext);

  return (
    <div className="mt-4 container">
      <h1>{products.length} Ürün bulundu</h1>
      <h1>
        {selectedCategory != "all" && (
          <>
            <span className="text-primary">{selectedCategory}</span>
            <span> için sonuçlar bulundu</span>
          </>
        )}
      </h1>

      <div className="wrapper">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
