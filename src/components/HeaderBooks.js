import styles from "../styles/HeaderBooks.module.scss";

import Image from "../assets/books-images/atomic-habits.jpg";

function HeaderBooks() {
  return (
    <header>
      
      <div className={styles.title_box}>
        <h1>
          Encontre os <span>Livros</span> que deseja
        </h1>
        <div className={styles.input_box}>
          <label htmlFor="book1">Search</label>
          <input
            type="text"
            name="book"
            id="book1"
            placeholder="Pesquisar livros"
          />
        </div>
      </div>
      <div className={styles.container_box_books}>
        <div className={styles.books_box}>
          <div className={styles.img_box}>
            <img src={Image} alt="Imagem do livro" />
          </div>
          <div className={styles.text_box}>
            <h2>Garry Potter and the philsopoher Stone</h2>
            <p>J.kRowling</p>
            <h4>Preço</h4>
            <input type="submit" value="Adicionar ao carrinho" />
          </div>
        </div>
        <div className={styles.books_box}>
          <div className={styles.img_box}>
            <img src={Image} alt="Imagem do livro" />
          </div>
          <div className={styles.text_box}>
            <h2>Garry Potter and the philsopoher Stone</h2>
            <p>J.kRowling</p>
            <h4>Preço</h4>
            <input type="submit" value="Adicionar ao carrinho" />
          </div>
        </div>
        <div className={styles.books_box}>
          <div className={styles.img_box}>
            <img src={Image} alt="Imagem do livro" />
          </div>
          <div className={styles.text_box}>
            <h2>Garry Potter and the philsopoher Stone</h2>
            <p>J.kRowling</p>
            <h4>Preço</h4>
            <input type="submit" value="Adicionar ao carrinho" />
          </div>
        </div>
        <div className={styles.books_box}>
          <div className={styles.img_box}>
            <img src={Image} alt="Imagem do livro" />
          </div>
          <div className={styles.text_box}>
            <h2>Garry Potter and the philsopoher Stone</h2>
            <p>J.kRowling</p>
            <h4>Preço</h4>
            <input type="submit" value="Adicionar ao carrinho" />
          </div>
        </div>
      </div>
   
    </header>
  );
}

export default HeaderBooks;
