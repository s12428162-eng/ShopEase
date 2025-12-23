import { useParams } from "react-router-dom";
import { useState } from "react";
import { products } from "../data/products";
import { useCart } from "../Context/CartContext";
import type { CartItem } from "../Context/CartContext";
import "./Products.css";

type Size = "S" | "M" | "L" | "XL";

function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();

  const product = products.find(p => p.id === Number(id));
  const [size, setSize] = useState<Size>("M");
  const [quantity, setQuantity] = useState<number>(1);

  if (!product) {
    return <h2>المنتج غير موجود</h2>;
  }

  const handleAddToCart = () => {
    const item: CartItem = { ...product, quantity, size };
    addToCart(item);
  };

  return (
    <div className="details">
      <img className="imge" src={product.image} alt={product.name} />

      <h2>{product.name}</h2>
      <h3>{product.price} $</h3>

      <p>{product.description}</p>

      <div className="sizes">
        <p>المقاس:</p>
        {(["S", "M", "L", "XL"] as Size[]).map(s => (
          <button
            key={s}
            className={size === s ? "active" : ""}
            onClick={() => setSize(s)}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="quantity">
        <p>الكمية:</p>
        <button onClick={() => setQuantity(quantity - 1)} disabled={quantity === 1}>-</button>
        <span>{quantity}</span>
        <button onClick={() => setQuantity(quantity + 1)}>+</button>
      </div>

      <button className="btn" onClick={handleAddToCart}>
        أضف إلى السلة
      </button>
    </div>
  );
}

export default ProductDetails;
