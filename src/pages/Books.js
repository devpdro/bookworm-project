import BookPage from "../components/pagination/BookPage";
import NavBar from "../components/layout/NavBar";
import FooterPage from "../components/pagination/FooterPage";

function Books() {
  return (
    <main>
      <NavBar />
      <BookPage />
      <FooterPage />
    </main>
  );
}

export default Books;
