import React from "react";
import styles from "../../styles/layout/Header.module.scss";

function Header({ onSearch }) {
  const handleInputChange = (event) => {
    const searchTerm = event.target.value;
    onSearch(searchTerm);
  };

  return (
    <header>
      <div className={styles.box_container}>
        <div className={styles.title_box}>
          <h1>
            Melhores <span>Livros</span> Disponíveis
          </h1>
          <p>Compre livros de qualidade a um preço mais barato</p>
        </div>
        <div className={styles.input_box}>
          <input
            type="text"
            name="book"
            id="book1"
            placeholder="Pesquisar livros"
            onChange={handleInputChange}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
