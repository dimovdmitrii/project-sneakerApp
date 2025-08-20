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
    <div className={styles.cart}>
      <h1>Корзина</h1>
      {cartItems.length === 0 ? (
        <p>Корзина пуста.</p>
      ) : (
        <>
          <div className={styles.cartItemsList}>
            {cartItems.map((item) => (
              <CartCard key={item.id} item={item} />
            ))}
          </div>
          <div className={styles.totalPrice}>
            {" "}
            Total price: {totalPrice.toFixed(2)} Euro
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
