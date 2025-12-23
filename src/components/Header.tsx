import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";

function Header() {
  const { cart } = useCart();

  return (
    <>
      <header className="Head">
        <h3 className="Header">أهلاً وسهلاً بكم في المتجر</h3>
      </header>

      <nav className="nav-bar">
        <div className="logo">ShopEase</div>

        <ul className="nav-links">
          <li><Link to="/">كل المنتجات</Link></li>
          <li><Link to="/shirts">قمصان</Link></li>
          <li><Link to="/jackets">جاكيت</Link></li>
          <li><Link to="/about">من نحن</Link></li>
          <li><Link to="/articles">المقالات</Link></li>
        </ul>

        <div className="header-icons">
          <Link to="/search">
            <FaSearch className="icon" />
          </Link>


          <Link to="/cart" className="cart-icon">
            <FaShoppingCart className="icon" />
            <span className="cart-count">
              {cart.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Header;
