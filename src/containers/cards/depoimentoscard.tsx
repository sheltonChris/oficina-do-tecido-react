import { DepoimentosStyle } from "../../components/cards/styles"

type DepoimentosProps = {
    name: string
    photo: string
    text: string
}

export function DepoimentosCard({ name, photo, text }: DepoimentosProps) {

    return (
        <DepoimentosStyle>
            <img src={photo} alt={`Foto de ${name}`} />
            <div>
                <h3>{name}</h3>
                <p>{text}</p>
            </div>
        </DepoimentosStyle>
    )
}