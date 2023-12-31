import React, { useState, useEffect } from "react";
import styles from "../styles/Book.module.scss";
import { BookData } from "../BookData";
import { Link } from "react-router-dom";

function Book({ searchTerm }) {
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    const filtered = BookData.filter((book) =>
      book.book_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBooks(filtered);
  }, [searchTerm]);

  const firstFourBooks = filteredBooks.slice(0, 4);

  return (
    <section>
      <h1 className={styles.title}>
        Aqui estão alguns <span>livros</span> que você pode gostar
      </h1>
      <div className={styles.books_box_container}>
        {firstFourBooks.map((book) => (
          <div className={styles.books_box} key={book.id}>
            <div className={styles.img_box}>
              <img src={book.book_url} alt="Imagem do livro" />
            </div>
            <div className={styles.text_box}>
              <h2>{book.book_name}</h2>
              <p>{book.author_name}</p>
              <h4>R$ {book.price}</h4>
              <Link to={`/Details/${book.id}`}>
                <input type="submit" value="Ver mais" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Book;
