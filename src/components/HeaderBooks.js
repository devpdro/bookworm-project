import styles from "../styles/HeaderBooks.module.scss";

import Image from "../assets/books-images/jungle-book.webp";

function HeaderBooks() {
  return (
    <header>
      <div className={styles.title_box}>
        <h1>Find the books that you want</h1>
        <label htmlFor="search1">Search</label>
        <input type="text" name="search" id="search1"></input>
      </div>

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
    </header>
  );
}

export default HeaderBooks;
