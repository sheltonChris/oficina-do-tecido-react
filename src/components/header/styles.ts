import styled from "styled-components"

export const Header = styled.header`
padding: 16px;
display:flex;
align-items: center;
justify-content: space-between;
background-color: ${(props) => (props.theme.MainColor)};
position: sticky;
top: 0;
z-index: 1;

`
export const Logo = styled.img`
height: 70px;
width: 70px;
border-radius: 50%;

@media (max-width: 768px) {
    height: 40px;
    width: 40px;
    }
`

export const Title = styled.h1`
font-family: Galter, sans-serif;
font-size: 40px;

@media (max-width: 768px) {
    font-size: 16px;
    }
`

export const ButtonTheme = styled.button`
font-size: 14px;
padding: 8px;
border-radius: 12px;
color:#eee;
font-weight: bold;
background-color:${(props) => (props.theme.MainColor)};
border: 1px solid ${(props) => (props.theme.MainColor)};
cursor: pointer;

img {
    height: 30px;
    width: auto;
}
`