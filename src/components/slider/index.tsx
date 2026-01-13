import { useEffect, useState } from "react";
import { AutoBtn, NavAuto, Slide, SlideContent, SliderStyle, Slides } from "./styles";

const Slider = () => {

    const SLIDES = [
        {
            id: 1,
            image: "https://images.pexels.com/photos/6665030/pexels-photo-6665030.jpeg",
            titulo: "Costura sob medida",
            descricao: "Peças feitas com cuidado e acabamento profissional"
        },
        {
            id: 2,
            image: "https://images.pexels.com/photos/7778034/pexels-photo-7778034.jpeg",
            titulo: "Ajustes e reformas",
            descricao: "Sua roupa perfeita no seu corpo"
        },
        {
            id: 3,
            image: "https://images.pexels.com/photos/6764915/pexels-photo-6764915.jpeg",
            titulo: "Moda artesanal",
            descricao: "Detalhes que fazem a diferença"
        },
        {
            id: 4,
            image: "https://images.pexels.com/photos/7256897/pexels-photo-7256897.jpeg",
            titulo: "Atelier especializado",
            descricao: "Tradição e qualidade em cada ponto"
        }
    ]

    const [activeSlide, setActiveSlide] = useState(0);

    const SLIDE_COUNT = 4;
    const INTERVAL = 4000;

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % SLIDE_COUNT)
        }, INTERVAL)

        return () => clearInterval(timer)
    }, [])

    return (
        <SliderStyle>
            <Slides $activeSlide={activeSlide}>

                {SLIDES.map((slide, index) => (
                    <Slide key={index}>
                        <img src={slide.image} alt={slide.titulo} />

                        <SlideContent>
                            <h2>{slide.titulo}</h2>
                            <p>{slide.descricao}</p>
                        </SlideContent>
                    </Slide>
                ))}
            </Slides>




            <NavAuto>
                {SLIDES.map((_, index) => (
                    <AutoBtn
                        key={index}
                        $active={activeSlide === index}
                        onClick={() => setActiveSlide(index)}
                    />
                ))}
            </NavAuto>
        </SliderStyle>
    );
};




export default Slider;
