import { useEffect } from "react";
import { useContext } from "react";
import { productContext } from "../Context/ProductContext";

function Home() {
  const { products } = useContext(productContext);

  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the home page</p>
      <div className="grid grid-cols-4 gap-4">
        {products.map((book, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <img src={book.coverImage} alt={book.title} className="w-60" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
