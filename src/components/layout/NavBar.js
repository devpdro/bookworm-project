import { StyledNavBar } from "../../styles/NavBar.style";

function NavBar() {
  return (
    <StyledNavBar>
      <div>
        <h1>Book<span>worm</span></h1>
      </div>
      <ul>
        <li><a href="asda">Inicio</a></li>
        <li><a href="asda">Livros</a></li>
        <li><a href="asdad">Login</a></li>
        <li><a href="asdsa">Sing up</a></li>
      </ul>
    </StyledNavBar>
  );
}

export default NavBar;
