import styled from "styled-components";
import { Fragment } from "react/cjs/react.production.min";

const FooterContent = styled.div`
    display: flex;
    background-color: transparent;
    justify-content: center;
`

const FooterElement = styled.span`
    font-size: 20px;
    font-weight: 700;
    margin: 30px;
        @media (max-width: 600px) {
            margin: 5px;
            font-size: 15px;
        }

`


const Footer = () => {
    return(
        <FooterContent>
            <FooterElement>Footer</FooterElement>
            <FooterElement>/</FooterElement>
            <FooterElement>Instruments</FooterElement>
            <FooterElement>/</FooterElement>
            <FooterElement>Blog</FooterElement>
            <FooterElement>/</FooterElement>
            <FooterElement>About</FooterElement>
        </FooterContent>
    )
}

export default Footer;