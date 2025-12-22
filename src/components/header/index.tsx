import { ButtonTheme, Header as HeaderStyle } from "./styles"

type Props = {
    Theme: () => void
}

const Header = (props: Props) => {
    return (
        <HeaderStyle>
            <img src="https://placehold.co/70" alt="" />
            <h1>Oficina do Tecido</h1>
            <ButtonTheme onClick={props.Theme} ><img src="https://www.svgrepo.com/show/390804/sun-moon-eclipse.svg" alt="mudar tema" /></ButtonTheme>
        </HeaderStyle>
    )
}

export default Header