import styled, {createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`
html{
    height: 100%;
}
body{
    background-image: url('https://picsum.photos/1400/750');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
}

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0 20px;
    font-family: 'Catamaran', sans-serif;
}
`;