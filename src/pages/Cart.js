import React from "react";
import CartPage from "../components/pagination/CartPage";
import NavBar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer"

const Cart = () => {
  return (
    <main>
      <NavBar />
      <CartPage />
      <Footer />
    </main>
  );
};

export default Cart;
