import NavBar from "./components/layout/NavBar";
import Header from "./components/layout/Header";
import ContainerImg from "./components/layout/ContainerImg";
import Book from "./components/Book";
import Footer from "./components/layout/Footer";
import Books from "./pages/Books";

function App() {
  return (
    <main>
      <ContainerImg>
        <NavBar />
        <Header />
      </ContainerImg>
      <Book />
      <Footer />
      <Books />
    </main>
  );
}

export default App;
