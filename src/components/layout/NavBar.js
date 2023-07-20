import styles from "../../styles/layout/Navbar.module.scss";

function NavBar() {
  return (
    <nav>
      <div className={styles.title}>
        <h1>
          Book<span>worm</span>
        </h1>
      </div>
      <ul>
        <li>
          <a href="asda">Inicio</a>
        </li>
        <li>
          <a href="asda">Livros</a>
        </li>
        <li>
          <a href="asdad">Conecte-se</a>
        </li>
        <li>
          <a href="asdsa">Cadastrar-se</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
