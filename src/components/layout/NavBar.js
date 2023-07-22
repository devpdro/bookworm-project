import styles from "../../styles/layout/Navbar.module.scss";

import { Link } from "react-router-dom";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebaseConfig";

function NavBar() {
  const [user] = useAuthState(auth);

  const handleLogout = () => {
    const shouldLogout = window.confirm("Tem certeza que deseja sair?");

    if (shouldLogout) {
      auth.signOut();
    }
  };

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
          {user ? (
            <li>
              <Link onClick={handleLogout}>Sair</Link>
            </li>
          ) : (
            <li>
              <Link to="/login">Conectar</Link>
              <Link to="/Register">Cadastrar-se</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
