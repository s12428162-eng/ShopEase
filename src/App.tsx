import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./components/Cart";


import About from "./components/About";
import Articles from "./components/Articles";
import Jackets from "./components/Jackets";
import Shirts from "./components/Shirts";


import Login from "./pages/Login";



import SearchPage from "./components/SearchPage";

function App() {
  
  return (
    <>
      <Header />

      <Routes>


      
        <Route path="/" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />



        <Route path="/about" element={<About />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/jackets" element={<Jackets />} />
        <Route path="/shirts" element={<Shirts />} />




        <Route path="/login" element={<Login />} />



        <Route path="/search" element={<SearchPage />} />


      </Routes>

      <Footer />
    </>
  );
}

export default App;
