import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => {
        const sliceTrending = res.products.slice(0, 6);
        setTrendingProducts(sliceTrending);
      });
  }, []);
  return (
    <div>
      <h2 style={{margin:"20px 0"}}>Home</h2>
      <span>Trending Products</span>
      <div className="products-grid">
        {trendingProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <Link to={`/products/${product.id}`}>
              <img src={product.thumbnail} alt="img" />
              <h3>{product.title}</h3>
            </Link>
          </div>
        ))}
      </div>

      <Link to="/products">
        <button>View All Products</button>
      </Link>
    </div>
  );
};

export default Home;
