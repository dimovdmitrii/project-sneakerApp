import { useState, useEffect } from "react";
import { BASE_URL } from "../../context/cartContext";
import axios from "axios";
import styles from "./styles.module.css";
import bannerImage from "../../assets/images/banner.png";
import ProductCard from "../../components/productCard";
import { CartProvider } from "../../context/cartContext";

function Main() {
  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    try {
      const response = await axios.get(`${BASE_URL}/productData`);
      setProducts(response.data);
    } catch (error) {
      console.error("Error occured when fetching products: ", error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <main>
      <div className={styles.mainContainer}>
        <div className={styles.bannerContainer}>
          <img src={bannerImage} alt="Banner" className={styles.Banner} />
        </div>
        <div className={styles.productsContainer}>
          <div className={styles.productsHeader}>
            <h1>Товары</h1>
          </div>

          <div className={styles.productsGrid}>
            {products.slice(0, 3).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
