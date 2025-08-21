import React from "react";
import { useCart } from "../../context/cartContext";
import CartCard from "../../components/cartCard";
import styles from "./styles.module.css";

function Cart() {
  const { cartItems } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + parseFloat(item.price) * item.quantity,
    0
  );

  return (
    <div className={styles.cartPage}>
      <h2 className={styles.pageTitle}>Корзина</h2>
      <div className={styles.cartContainer}>
        <div className={styles.cartItemsList}>
          {cartItems.length === 0 ? (
            <p>Корзина пуста.</p>
          ) : (
            cartItems.map((item) => <CartCard key={item.id} item={item} />)
          )}
        </div>
        <div className={styles.summaryBox}>
          <h3 className={styles.summaryTitle}>Итого</h3>
          <ul className={styles.summaryList}>
            {cartItems.map((item) => (
              <li key={item.id} className={styles.summaryItem}>
                <span className={styles.summaryItemName}>{item.name}</span>
              </li>
            ))}
          </ul>
          <div className={styles.totalPrice}>
            <span className={styles.totalPriceLabel}>Цена:</span>
            <span className={styles.totalPriceValue}>
              {totalPrice.toFixed(2)} €
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
