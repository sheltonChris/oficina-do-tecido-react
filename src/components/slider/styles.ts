import styled from "styled-components";

export const SliderStyle = styled.div`
    margin: 0 auto;
    width: 100vw;
    height: min(80vh, 600px);
    overflow: hidden;
    position: relative;
`;

export const Slides = styled.div<{ $activeSlide: number }>`
    display: flex;
    height: 100%;
    transition: transform 0.6s ease;

    transform: translateX(${(props) => -props.$activeSlide * 100}%);
`;

export const Slide = styled.div`
    width: 100vw;
    height: 100%;
    flex-shrink: 0;
    position: relative;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export const SlideContent = styled.div`
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 10vw;
    color: #fff;

    background: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.55),
        rgba(0, 0, 0, 0.15)
    ) ;

    h2 {
        font-size: clamp(2rem, 4vw, 3.5rem);
        margin-bottom: 12px;
    }

    p {
        font-size: clamp(1rem, 2vw, 1.3rem);
        max-width: 600px;
    }
`;


export const NavAuto = styled.div`
    position: absolute;
    bottom: 15px;
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const AutoBtn = styled.div<{ $active: boolean }>`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 2px solid ${(props) => props.theme.MainColor};
    cursor: pointer;
    transition: 0.3s;

    background-color: ${(props) =>
        props.$active ? props.theme.MainColor : "transparent"};

    &:not(:last-child) {
        margin-right: 12px;
    }
`


