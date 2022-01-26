import styled from "styled-components";
import { lightBlue } from "../../../style";

export const BioWrapper = styled.div`
    box-sizing: border-box;
    width: 90%;
    color: black;
    font-size: 17px;
    text-align: center;
    padding: 20px;
    border-radius: 8px;
    background-color: #ffffff;
    margin: 50px auto;
    padding: 10px 10% 20px 10%;
        @media (max-width: 700px) {
            width: 95%;
        }
`

export const AuthorName = styled.h2`
        color: ${lightBlue}
`

export const BioLogo = styled.div`
position: relative;
    margin: -45px auto 0 auto;
    display: flex;
    justify-content: center;
    width: 80px;
    height: 80px;
    border-radius: 50px;
    background-color: #ffffff;
`