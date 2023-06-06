import {createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`
html{
    min-height: 100vh;
}
body{
    background-image: url('https://picsum.photos/1440/750'); 
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    min-height: 100vh;
}

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Catamaran', sans-serif;
}
`;



