import React from "react";
import styles from "./styles.module.css";
import { useCart } from "../../context/cartContext";
import Button from "..//../assets/icons/button.svg";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className={styles.card}>
      <img
        src={product.image}
        alt={product.name}
        className={styles.productImage}
      />
      <div className={styles.cardContent}>
        <h3 className={styles.productName}>{product.name}</h3>
        <p className={styles.productPrice}>{product.price} €</p>
        <button onClick={handleAddToCart} className={styles.button}>
          <img src={Button} alt="" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
