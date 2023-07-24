import React from "react";

import { useState } from "react";

import NavBar from "./components/layout/NavBar";
import Header from "./components/layout/Header";
import ContainerImg from "./components/layout/ContainerImg";
import Book from "./components/Book";
import Footer from "./components/layout/Footer";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <main>
      <ContainerImg>
        <NavBar />
        <Header onSearch={handleSearch} />
      </ContainerImg>
      <Book searchTerm={searchTerm} />
      <Footer />
    </main>
  );
}

export default App;
