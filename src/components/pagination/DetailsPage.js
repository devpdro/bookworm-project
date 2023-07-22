import React from "react";
import styles from "../../styles/pagination/DetailsPage.module.scss";
import { useParams, useNavigate } from "react-router-dom";
import { BookData } from "../../BookData";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebaseConfig";
import Swal from "sweetalert2";

function DetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = BookData.find((book) => book.id === parseInt(id));

  const [user] = useAuthState(auth);

  const addToCart = () => {
    if (user) {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const existingBook = cart.find((item) => item.id === book.id);

      if (existingBook) {
        // Se o livro já existe no carrinho, aumenta a quantidade
        existingBook.quantidade += 1;
      } else {
        // Se o livro não existe no carrinho, adiciona com quantidade 1
        cart.push({ ...book, quantidade: 1 });
      }

      // Calcula o valor total do carrinho após adicionar o livro
      const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantidade,
        0
      );

      localStorage.setItem("cart", JSON.stringify(cart));
      localStorage.setItem("total", JSON.stringify(total)); // Armazena o valor total no localStorage
      Swal.fire({
        icon: "success",
        title: "Sucesso!",
        text: "Pedido adicionado ao carrinho.",
        timer: 1000,
        showConfirmButton: false,
      });
      navigate("/Cart");
    } else {
      Swal.fire({
        icon: "error",
        title: "Ops!",
        confirmButtonColor: "#ff6961",
        text: "Você precisa estar logado para adicionar ao carrinho.",
      });
    }
  };

  return (
    <main className={styles.container}>
      <div className={styles.box}>
        <div className={styles.img_box}>
          <img src={book.book_url} alt="Imagem do livro" />
        </div>
        <div className={styles.box_text}>
          <h2>{book.book_name}</h2>
          <h6>Autor: {book.author_name}</h6>
          <p>{book.book_description}</p>
          <h5>Descrição: {book.language}</h5>
          <h5>Páginas: {book.print_length}</h5>
          <h4>Preço: {book.price}</h4>
          <button onClick={addToCart}>Adicionar ao carrinho</button>
        </div>
      </div>
    </main>
  );
}

export default DetailsPage;
