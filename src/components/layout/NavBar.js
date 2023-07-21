import styles from "../../styles/layout/Navbar.module.scss";

import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <div className={styles.container}>
        <div className={styles.title_box}>
          <Link to="/">
            <h1>
              Book<span>worm</span>
            </h1>
          </Link>
        </div>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/books">Livros</Link>
          </li>
          <li>
            <Link to="/login">Conectar</Link>
          </li>
          <li>
            <Link to="/register">Cadastrar</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
