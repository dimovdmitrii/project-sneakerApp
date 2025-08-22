import React from "react";
import styles from "./styles.module.css";
import { useCart } from "../../context/cartContext";
import basket from "../../assets/icons/basket.svg";

function CartCard({ item }) {
  const { removeItem } = useCart();

  return (
    <div className={styles.cartCard}>
      <img src={item.image} alt={item.name} className={styles.productImage} />
      <div className={styles.productInfo}>
        <div className={styles.detailsAndPrice}>
          <div className={styles.productName}>{item.name}</div>
        </div>
        <div>
          <label>ЦЕНА: </label>
          <div className={styles.productPrice}>{item.price} €</div>
        </div>
        <button
          className={styles.removeButton}
          onClick={() => removeItem(item.id)}
        >
          <img
            src={basket}
            alt="Delete from basket"
            className={styles.basketIcon}
          />
        </button>
      </div>
    </div>
  );
}

export default CartCard;
