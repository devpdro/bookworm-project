import styles from "../../styles/layout/Navbar.module.scss";

import { BiShoppingBag } from "react-icons/bi";

import { Link } from "react-router-dom";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebaseConfig";

import Swal from "sweetalert2";

function NavBar({ isHomePage }) {
  const [user] = useAuthState(auth);

  const handleLogout = () => {
    Swal.fire({
      title: "Tem certeza que deseja sair?",
      showCancelButton: true,
      confirmButtonText: "Sim",
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#fa7728",
      cancelButtonColor: "#fa7728",
    }).then((result) => {
      if (result.isConfirmed) {
        auth.signOut();
      }
    });
  };

  const navbarStyle = isHomePage
    ? {
        background: "transparent",
      }
    : {
        background: "linear-gradient(to bottom, #232123 0%, transparent 100%)",
      };

  return (
    <nav style={navbarStyle}>
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
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/books">Livros</Link>
          </li>
          {user ? (
            <li>
              <Link onClick={handleLogout}>Sair</Link>
              <Link to="/Cart" s>
                <BiShoppingBag className={styles.icon} />
              </Link>
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
