import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root {
        --blue: #5429CC;
        --light-blue: #6933FF;
        --red: #E62E4D;
        --green: #33CC95;
        --shape: #ffffff;

        --text-title: #363F5F;
        --text-body: #969CB3;

        --background: #f0f2f5;

        --border-radius: 0.25rem;
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    html {
        @media(max-width: 1080) {
            font-size: 93.75%;
        }

        @media(max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }
    
    h1, h2, h3, h4, h5, h6 {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
    

    
`;
