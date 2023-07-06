import { createGlobalStyle } from "styled-components";
import Logo from "./assets/showcase-bg.jpg";

export const GlobalStyled = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
        
    }

    body {
        background: url(${Logo}) no-repeat left center;
        background-size: cover;
        width: 100vw;
        height: 100vh;
    }
`;
