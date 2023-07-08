import { NavBarStyled } from "../../styles/NavBar.style";


function NavBar() {
  return (
    <NavBarStyled>
      <div>
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
    </NavBarStyled>
  );
}

export default NavBar;
