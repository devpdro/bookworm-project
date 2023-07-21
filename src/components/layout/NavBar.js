import styles from "../../styles/layout/Navbar.module.scss";

import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <div className={styles.title_box}>
        <h1>
          Book<span>worm</span>
        </h1>
      </div>
      <ul>
        <li>
          <a href="/">Inicio</a>
        </li>
        <li>
          <Link to="/books">Livros</Link>
        </li>
        <li>
          <a href="/login">Conectar</a>
        </li>
        <li>
          <a href="/register">Cadastrar</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
