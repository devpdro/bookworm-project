import React, { useState, useEffect, useMemo } from "react";

import styles from "../../styles/pagination/BookPage.module.scss";

import { BookData } from "../../BookData";

import { Link } from "react-router-dom";

function BookPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);

  const firstFifteenBooks = useMemo(() => BookData.slice(0, 16), []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const filtered = firstFifteenBooks.filter((book) =>
      book.book_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBooks(filtered);
  }, [searchTerm, firstFifteenBooks]);

  return (
    <header className={styles.container}>
      <div className={styles.title_box}>
        <h1>
          Encontre os <span>Livros</span> que deseja
        </h1>
        <div className={styles.input_box}>
          <input
            type="text"
            name="book"
            id="book1"
            placeholder="Pesquisar livros"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className={styles.books_box_container}>
        {filteredBooks.map((book) => (
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
    </header>
  );
}

export default BookPage;
