import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/api/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product details:", error));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-details-container">
      <img src={product.img} alt={product.title} className="product-img" />
      <div className="product-details">
        <h2 className="product-title">{product.title}</h2>
        <div className="product-info">
          <p>Category: {product.category}</p>
          <p>Color: {product.color}</p>
          <p>Company: {product.company}</p>
          <p>Previous Price: {product.prevPrice}</p>
          <p>New Price: {product.newPrice}</p>
          <p>Star Rating: {product.star}</p>
          <p>Reviews: {product.reviews}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
