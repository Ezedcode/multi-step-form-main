import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    * {
        border: none;
        margin: 0;
        padding: 0;
    }

    body {
        font-size: 16px;
        font-family: Ubuntu;
        font-weight: 700;
        color: hsl(213, 96%, 18%);
        background: hsl(229, 24%, 87%);
    }

    h1 {
        font-weight: 700;
    }

    p {
        font-weight: 400;
        color: hsl(231, 11%, 63%);
        line-height: 25px;
    }
    
    button {
        font-weight: 700;
    }

    @media (width: 375px) {
        h1 {
            font-size: 25px;
        }
    }
`;

export default Global;
