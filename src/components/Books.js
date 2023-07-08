import {
  BooksStyled,
  BooksTitleStyled,
  BooksDivContainer,
  BooksBoxContainer,
} from "../styles/Books.style";

import Image from "../assets/books-images/jungle-book.webp";

function Books() {
  return (
    <BooksStyled>
      <BooksTitleStyled>
        Here are some books thaht you might like
      </BooksTitleStyled>

      <BooksDivContainer>
        <BooksBoxContainer>
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
        </BooksBoxContainer>
        <BooksBoxContainer>
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
        </BooksBoxContainer>
        <BooksBoxContainer>
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
        </BooksBoxContainer>
        <BooksBoxContainer>
          <img src={Image} alt="" />

          <div>
            <h1>Garry Potter and the philsopoher Stone</h1>
            <p>J.kRowling</p>
            <h4>Preço</h4>
          </div>

          <input type="submit" value="Comprar" />
        </BooksBoxContainer>
      </BooksDivContainer>
    </BooksStyled>
  );
}

export default Books;
