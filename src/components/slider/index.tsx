import { useEffect, useState } from "react";
import { AutoBtn, NavAuto, Slide, SliderStyle, Slides } from "./styles";

const Slider = () => {
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
                {IMAGES.map((src, index) => (
                    <Slide key={index}>
                        <img src={src} alt={`imagem ${index + 1}`} />
                    </Slide>
                ))}
            </Slides>

            <NavAuto>
                {IMAGES.map((_, index) => (
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

const IMAGES = [
    "https://images.pexels.com/photos/6665030/pexels-photo-6665030.jpeg",
    "https://images.pexels.com/photos/7778034/pexels-photo-7778034.jpeg",
    "https://images.pexels.com/photos/6764915/pexels-photo-6764915.jpeg",
    "https://images.pexels.com/photos/7256897/pexels-photo-7256897.jpeg",
];

export default Slider;
