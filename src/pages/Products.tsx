import "./Products.css";
import ProductCard from "../components/ProductCard";
import { useState } from "react";
import productsData from "../data/products";

function Products() {
  const [sortType, setSortType] = useState("default");

  let products = [...productsData];

  if (sortType === "name") {
    products.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (sortType === "price") {
    products.sort((a, b) => a.price - b.price);
  }

  return (
    <div className="products-page">
      <select value={sortType} onChange={(e) => setSortType(e.target.value)}>
        <option value="default">فرز</option>
        <option value="name">حسب الاسم (أبجدي)</option>
        <option value="price">حسب السعر</option>
      </select>

      <div className="products">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}

export default Products;
