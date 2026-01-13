import styled from "styled-components"

export const Section = styled.div`
margin: 50px 0;
`

export const DepoimentosArea = styled.section`
    display: flex;
    gap: 24px;

    @media (max-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    }

    @media (max-width:767px) {
        display: block;
        padding: 16px;
    }
`

export const H1 = styled.h1`
text-align: center;
font-weight: bold;
color: ${(props) => (props.theme.TextColor)};

@media (max-width: 767px) {
    font-size: 35px;
}
`

export const DepoimentosStyle = styled.article`
    display: flex;
    gap: 16px;
    margin: 8px;
    padding: 24px;
    min-width: 320px;
    

    background-color: ${(props) => (props.theme.MainColor)};
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.08);

    img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        object-fit: cover;
    }

    h3 {
        font-size: 1rem;
        margin-bottom: 6px;
    }

    p{
        font-size: 0.9rem;
        color: #555;
        line-height: 1.4;
    }
`