import NavBar from "./components/layout/NavBar";
import Header from "./components/layout/Header";
import ContainerImg from "./components/layout/ContainerImg";
import Container from "./components/layout/Container";
import Books from "./components/Books";

function App() {
  return (
    <>
      <ContainerImg>
        <NavBar />
        <Header />
      </ContainerImg>
      <Container>
        <Books />
      </Container>
    </>
  );
}

export default App;
