import React from "react";

import { useState } from "react";

import { Helmet } from "react-helmet";

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
    <>
      <Helmet>
        <title>Bookworm</title>
      </Helmet>
      <ContainerImg>
        <NavBar isHomePage={true} />
        <Header onSearch={handleSearch} />
      </ContainerImg>
      <Book searchTerm={searchTerm} />
      <Footer />
    </>
  );
}

export default App;
