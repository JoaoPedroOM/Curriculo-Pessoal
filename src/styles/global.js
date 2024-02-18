import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', serif;
    }

    :root{
        font-size: 62.5%;
    }

    body{
        font-size: 1.6rem;
        background-color: #09090B;
    }

    a{
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }
`;