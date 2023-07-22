import React from "react";

import NavBar from "./components/layout/NavBar";
import Header from "./components/layout/Header";
import ContainerImg from "./components/layout/ContainerImg";
import Book from "./components/Book";
import Footer from "./components/layout/Footer";

import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";

function App() {
  return (
    <main>
      <ContainerImg>
        <NavBar />
        <Header />
      </ContainerImg>
      <Book />
      <Footer />
      <NotificationContainer />
    </main>
  );
}

export default App;
