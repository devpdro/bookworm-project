import styles from "../styles/Book.module.scss";

import Image from "../assets/books-images/jungle-book.webp";

function Book() {
  return (
    <section>
      <h1>Here are some books thaht you might like</h1>

      <div className={styles.container_box_books}>
        <div className={styles.books_box}>
          <div>
            <img src={Image} alt="" />
          </div>
          <div>
            <h1>Garry Potter and the philsopoher Stone</h1>
            <p>J.kRowling</p>
            <h4>Preço</h4>
          </div>
          <div>
            <input type="submit" value="" />
          </div>
        </div>
        <div className={styles.books_box}>
          <div>
            <img src={Image} alt="" />
          </div>
          <div>
            <h1>Garry Potter and the philsopoher Stone</h1>
            <p>J.kRowling</p>
            <h4>Preço</h4>
          </div>
          <div>
            <input type="submit" value="" />
          </div>
        </div>
        <div className={styles.books_box}>
          <div>
            <img src={Image} alt="" />
          </div>
          <div>
            <h1>Garry Potter and the philsopoher Stone</h1>
            <p>J.kRowling</p>
            <h4>Preço</h4>
          </div>
          <div>
            <input type="submit" value="" />
          </div>
        </div>
        <div className={styles.books_box}>
          <img src={Image} alt="" />
          <div>
            <h1>Garry Potter and the philsopoher Stone</h1>
            <p>J.kRowling</p>
            <h4>Preço</h4>
          </div>
          <input type="submit" value="Comprar" />
        </div>
      </div>
    </section>
  );
}

export default Book;
