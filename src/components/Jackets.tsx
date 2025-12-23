import "./Style.css";



import { products } from "../data/products";
import { Link } from "react-router-dom";

function Jackets() {
  const jackets = products.filter(
    (product) => product.category === "jacket"
  );

  return (
    <div className="jackets-container">
    <div className="jackets-title">
      <h2>الجاكيتات</h2>

      <div className="jackets-grid">
        {jackets.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price} $</p>

            <Link to={`/product/${product.id}`}>
              عرض التفاصيل
            </Link>
          </div>
        ))}
      </div>
     </div>
    </div>
  );
}

export default Jackets;