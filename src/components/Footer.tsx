import "./Style.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div>
          <h4>معلومات هامة</h4>
          <p>About Trloos</p>
          <p>Purchase Terms</p>
          <p>Returns & Exchanges</p>
        </div>

        <div>
          <h4>خدمة العملاء</h4>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>

       
        <p>
          <Link to="/login" style={{ color: "white", textDecoration: "none" }}>
            تسجيل الدخول
          </Link>
        </p>

      </div>
    </footer>
  );
}

export default Footer;