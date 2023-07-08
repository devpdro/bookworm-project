import styled from "styled-components";

export const BooksStyled = styled.section`
    
`;

export const BooksTitleStyled = styled.h1`
    color: red;
    margin: 2rem 0 2rem 0;
`;

export const BooksDivContainer = styled.div`
  display: flex;
`;

export const BooksBoxContainer = styled.div`

  margin-right: 2rem;
   & div {
    display: flex;
    flex-direction: column;
    align-items: center;
   }
`;