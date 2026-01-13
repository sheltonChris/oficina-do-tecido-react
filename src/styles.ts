import { createGlobalStyle } from "styled-components"

const GlobalStyled = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Inter, sans-serif;;
    list-style: none;
    
}

@font-face {
    font-family: Galter;
    src: url('Galter.otf') format(opentype);
}

body {
    padding-bottom: 120px;
    background-color: ${(props) => (props.theme.Background)};
    transition: 0.5s ease;
    overflow-x: hidden;
}

.container {
    max-width: 1920px;
    width: 100%;
    margin: 0 auto;
}
`

export default GlobalStyled