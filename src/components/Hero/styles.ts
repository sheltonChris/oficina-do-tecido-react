import styled from "styled-components";

export const HeroStyle = styled.section`
    min-height: 80vh;
    padding: 3vw;
    display: grid;
    gap: 5px;
    direction: ltr;
    grid-template-columns: 1fr 1fr;
    text-align: center;

    div{
        
    }

    @media (max-width: 768px) {
    grid-template-columns: 1fr;

    }

`

export const Title = styled.h1`
font-family: Galter, sans-serif;
font-size: 60px;
margin: 50px auto;
color: ${(props) => (props.theme.TextColor)};

`

export const SubTitle = styled.h3`
font-size: 20px;
margin: 50px auto;
color: ${(props) => (props.theme.TextColor)};
`


export const Img = styled.img`
border-radius: 8px;
width: 100%;
height: 100%;

`

export const Ul = styled.ul`
margin-bottom: 50px;
    li{
        padding: 8px;
        font-size: 16px;
        margin: 8px;
        color: ${(props) => (props.theme.TextColor)}

    }
`

export const Button = styled.button`
    padding: 16px 25px;
    border-radius: 20px;
    margin: 10px;
    background-color: ${(props) => props.theme.MainColor};
    color: ${(props) => props.theme.TextColor};
    border: none;
        cursor: pointer;

  /* sombra inicial */
    -shadow: 0 2px 6px ${(props) => props.theme.MainColor};

    transition: box-shadow 0.3s ease, transform 0.3s ease;

    &:hover {
        box-shadow: 0 6px 16px ${(props) => props.theme.MainColor};
        transform: translateY(-2px);
    }

    &:active {
        box-shadow: 0 2px 4px ${(props) => props.theme.MainColor};
        transform: translateY(0);
    }

    @media (max-width: 768px) {
        padding: 16px 15px;
    }
`;
