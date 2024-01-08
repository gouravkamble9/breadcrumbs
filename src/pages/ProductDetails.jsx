import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setproduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setproduct(res);
      });
  }, []);
  return (
    <div className="product-detail">
      <h2 style={{margin:"20px 0"}}>Product Details</h2>
      {product ? (
        <div className="details">
          <img src={product?.thumbnail} alt="img" />
          <div className="price">
            <h2>{product?.title}</h2>
            <h3>${product.price}</h3>
            <p>{product.description}</p>
          </div>
        </div>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
};

export default ProductDetails;
