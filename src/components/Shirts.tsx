import { products } from "../data/products";
import { Link } from "react-router-dom";
import "./Style.css";
function Shirts() {
  const shirts = products.filter(
    (product) => product.category === "shirt"
  );

  return (
    <div className="shirts-page">
  <h1 className="shirts-title">القمصان</h1>

  <div className="shirts-grid">
    {shirts.map((product) => (
      <div className="shirt-card" key={product.id}>
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p className="price">{product.price} $</p>
        <Link to={`/product/${product.id}`}>عرض التفاصيل</Link>
      </div>
    ))}
  </div>
</div>

  );
}

export default Shirts;