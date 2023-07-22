import React from "react";

import styles from "../../styles/pagination/DetailsPage.module.scss";

import { useParams } from "react-router-dom";
import { BookData } from "../../BookData";

function DetailsPage() {
  const { id } = useParams();

  const book = BookData.find((book) => book.id === parseInt(id));

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
          <h5>páginas: {book.print_length}</h5>
          <h4>Preço: {book.price}</h4>
          <input type="submit" value="Adicionar ao carrinho" />
        </div>
      </div>
    </main>
  );
}

export default DetailsPage;
