import { Button, HeroStyle, Img, SubTitle, Title, Ul } from "./styles"

const Hero = () => {
    return (
        <HeroStyle>
            <div>
                <Title>Onde Costurar é uma arte</Title>
                <SubTitle>Costura sob medida, unindo técnica, cuidado e atenção aos detalhes <br /> para valorizar cada peça</SubTitle>
                <Ul>
                    <li>Ajustes e reformas de roupas</li>
                    <li>Costura sob medida</li>
                    <li>Conserto de peças sociais e casuais</li>
                    <li>Acabamento e personalização</li>
                </Ul>
                <Button type="button">Entre em contato</Button>
                <Button>Saiba mais sobre nós</Button>

            </div>
            <Img src="/img/hero-img.jpg" alt="" />
        </HeroStyle>
    )
}

export default Hero