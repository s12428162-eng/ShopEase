import { useCart } from "../Context/CartContext";

 function Cart() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h2>🛒 السلة</h2>
      {cart.length === 0 && <p>السلة فارغة</p>}
      {cart.map(item => (
        <div key={item.id + (item.size ?? "default")}>
          <span>
            {item.name} {item.size && `(${item.size})`} × {item.quantity}
          </span>
          <button onClick={() => removeFromCart(item.id)}>✖</button>
        </div>
      ))}
      <hr />
      <strong>المجموع: {total} ₪</strong>
    </div>
  );
}
export default Cart;