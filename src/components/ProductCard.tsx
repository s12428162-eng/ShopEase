import { Link } from "react-router-dom";
import type { Product } from "../data/products";
import { useCart } from "../Context/CartContext";
import "./ProductCard.css";

type Props = {
  product: Product;
};

function ProductCard({ product }: Props) {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} />
      </Link>

      <h3>{product.name}</h3>
      <p>{product.price} $</p>

      <button onClick={() => addToCart({ ...product, quantity: 1 })}>
        أضف إلى السلة
      </button>
    </div>
  );
}

export default ProductCard;
