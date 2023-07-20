import NavBar from "./components/layout/NavBar";
import Header from "./components/layout/Header";
import ContainerImg from "./components/layout/ContainerImg";
import Books from "./components/Books";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <main>
      <ContainerImg>
        <NavBar />
        <Header />
      </ContainerImg>
      <Books />
      <Footer />
    </main>
  );
}

export default App;
