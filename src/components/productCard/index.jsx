import React from "react";
import { useState } from "react";
import styles from "./styles.module.css";
import { useCart } from "../../context/cartContext";
import button from "..//../assets/icons/button.svg";
import buttonHover from "../../assets/icons/Button-hovering.svg";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const buttonIcon = isHovered ? buttonHover : button;

  return (
    <div className={styles.card}>
      <img
        src={product.image}
        alt={product.name}
        className={styles.productImage}
      />
      <div className={styles.cardContent}>
        <h3 className={styles.productName}>{product.name}</h3>
        <p className={styles.cena}>цена:</p>
        <p className={styles.productPrice}>{product.price} €</p>

        <button
          onClick={handleAddToCart}
          className={styles.button}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img src={buttonIcon} alt="Add to busket" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
