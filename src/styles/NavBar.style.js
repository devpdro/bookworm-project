import styled from "styled-components";

export const StyledNavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & div {
    & h1 {
      margin: 0.7rem 2rem 0.7rem 2rem;
      font-weight: 900;
      color: white;
    }
  }

  & ul {
    display: flex;

    & li {
      list-style: none;
      & a {
        text-decoration: none;
      }
    }
  }
`;
