import styled from "styled-components"

export const Header = styled.header`
padding: 20px;
display:flex;
align-items: center;
justify-content: space-between;
background-color: ${(props) => (props.theme.MainColor)};
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