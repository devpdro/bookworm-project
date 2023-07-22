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
        <div>
          <img src={book.book_url} alt="Imagem do livro" />
        </div>
        <div>
          <h2>{book.book_name}</h2>
          <p>Autor: {book.author_name}</p>
          <p>Descrição: {book.book_description}</p>
          <p>Preço: {book.price}</p>
        </div>
      </div>
    </main>
  );
}

export default DetailsPage;
