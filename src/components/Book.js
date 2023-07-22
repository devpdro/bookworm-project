import styles from "../styles/Book.module.scss";

import Image from "../assets/books-images/atomic-habits.jpg";

function Book() {
  return (
    <section>
      <h1 className={styles.title}>
        Aqui estão alguns <span>livros</span> que você pode gostar
      </h1>
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
    </section>
  );
}

export default Book;
