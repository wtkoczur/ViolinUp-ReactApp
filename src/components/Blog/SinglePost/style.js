import styled from "styled-components";
import { Link } from "react-router-dom";
import { lightBlue } from "../../../style";

export const SingleBlogPost = styled.div`
    box-sizing: border-box;
    width: 90%;
    color: black;
    font-size: 17px;
    text-align: start;
    padding: 20px;
    border-radius: 8px;
    background-color: #ffffff;
    margin: 10px auto;
    padding-bottom:20px;
        @media (max-width: 700px) {
            width: 95%;
        }
`

export const SingleBlogPostContent = styled.div`

`


export const MyBackLinks = styled(Link)`
    text-decoration: none;
`

export const MyBackLinksIcon = styled.button`
font-size: 16px;
    background-color: transparent;
    color: ${lightBlue};
    border-radius: 10px;
    border: none;
    padding: 8px 10px;
    margin-left: 10px;
        &:hover {
            transition: 800ms;
            color: #001775;
            transform: translateX(-10px);
`