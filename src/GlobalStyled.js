import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
    @font-face {
        font-family: 'Poppins', sans-serif;
        src: url(https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap);
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        /*
        height: 800px!important;
        font-family: 'Poppins', sans-serif;
        font-family: 'Cabin', sans-serif;
        font-family: 'Press Start 2P', cursive;
        */
    }
`;
