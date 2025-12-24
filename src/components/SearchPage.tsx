import { useState } from "react";
import ProductCard from "../components/ProductCard";
import productsData from "../data/products";
import type { Product } from "../data/products";
import "./Style.css";
 import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchPage() {
  const [query, setQuery] = useState<string>("");

  const results: Product[] = productsData.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search-page">
      <h2 className="search-title">Search our site</h2>


      <div className="search-layout">
        {/* LEFT SIDE RESULTS */}
        <div className="search-left">
          <h3>Products</h3>

          {query === "" ? (
            <p>ابدأ بالبحث عن منتج...</p>
          ) : results.length > 0 ? (
            <div className="search-grid">
              {results.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p>لا يوجد نتائج</p>
          )}
        </div>

       
      </div>
    </div>
  );
}

export default SearchPage;

