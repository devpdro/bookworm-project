import React from "react";

import styles from "../../styles/pagination/CartPage.module.scss";

import PaymentForm from "../PaymentForm";

function CartPage() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const removeFromCart = (bookId) => {
    const updatedCart = cart.filter((book) => book.id !== bookId);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    localStorage.setItem(
      "total",
      JSON.stringify(calculateTotalPrice(updatedCart))
    );
    window.location.reload();
  };

  const calculateTotalPrice = (cart) => {
    return cart.reduce(
      (total, book) => total + book.price * book.quantidade,
      0
    );
  };

  const total = calculateTotalPrice(cart);

  if (cart.length === 0) {
    return (
      <div className={styles.box_empty}>
        <h2>Carrinho</h2>
        <p>Seu carrinho está vazio.</p>
      </div>
    );
  }

  return (
    <main className={styles.container}>
      <h1>Carrinho</h1>
      <div className={styles.container_box}>
        {cart.map((book) => (
          <div className={styles.box} key={book.id}>
            <div className={styles.img_box}>
              <img src={book.book_url} alt="" />
            </div>
            <div className={styles.text_box}>
              <h2>{book.book_name}</h2>
              <h4>{book.author_name}</h4>
              <p>Preço: {book.price}</p>
              <p>Quantidade: {book.quantidade}</p>
              <p>Subtotal: {(book.price * book.quantidade).toFixed(2)}</p>
              <button onClick={() => removeFromCart(book.id)}>
                Remover do carrinho
              </button>
            </div>
          </div>
        ))}
        <div className={styles.total}>
          <h1>Valor Total: {total.toFixed(2)}</h1>
          <PaymentForm />
        </div>
      </div>
    </main>
  );
}

export default CartPage;
