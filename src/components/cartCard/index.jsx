import React, { useContext } from "react";
import styles from "./styles.module.css";
import { CartContext, useCart } from "../../context/cartContext";

function CartCard({ item }) {
  const { removeItem, updateItemQuantity } = useContext(CartContext);

  const handleDecreaseQuantity = () => {
    if (item.quantity > 1) {
      updateItemQuantity(item.id, item.quantity - 1);
    }
  };

  const handleIncreaseQuantity = () => {
    updateItemQuantity(item.id, item.quantity + 1);
  };

  return (
    <div className={styles.cartCard}>
      <img src={item.image} alt={item.name} className={styles.productImage} />
      <div className={styles.productInfo}>
        <h3 className={styles.productName}>{item.name}</h3>
        <p className={styles.productPrice}>Цена: {item.price} €</p>
        <p className={styles.productQuantity}>Количество: {item.quantity}</p>
        <div className={styles.quantityControls}>
          <button onClick={handleDecreaseQuantity}>-</button>
          <span>{item.quantity}</span>
          <button onClick={handleIncreaseQuantity}>+</button>
        </div>
        <button
          className={styles.removeButton}
          onClick={() => removeItem(item.id)}
        >
          Удалить
        </button>
      </div>
    </div>
  );
}

export default CartCard;
