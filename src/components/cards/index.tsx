import { depoimentos } from "../../containers/cards/depoimentos"
import { DepoimentosCard } from "../../containers/cards/depoimentoscard"
import { DepoimentosArea, H1, Section } from "./styles"

export function SectionDepoimentos() {
    return (
        <Section>
            <div><H1>Depoimento dos Clientes</H1></div>
            <DepoimentosArea >
                {depoimentos.map(item => (
                    <DepoimentosCard
                        key={item.id}
                        name={item.name}
                        photo={item.photo}
                        text={item.text}
                    />
                ))}
            </DepoimentosArea>
        </Section>
    )
}