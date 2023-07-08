import styled from "styled-components";

export const NavBarStyled = styled.nav`
  display: flex;
  max-width: 1280px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;

  & div {
    font-size: 1.4rem;

    & h1 {
      margin: 0.7rem 0 0.7rem 0;
      color: #fff;

      & span {
        color: ${({ theme }) => theme.colors.secondary};
      }
    }
  }

  & ul {
    display: flex;

    & li {
      list-style: none;

      & a {
        text-decoration: none;
        font-size: 2rem;
        font-size: 1.3rem;
        margin-left: 1rem;
        color: #fff;
      }
    }
  }
`;
