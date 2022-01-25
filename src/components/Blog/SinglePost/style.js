import styled from "styled-components";
import { Link } from "react-router-dom";
import { lightBlue } from "../../../style";

export const SingleBlogPost = styled.div`
    box-sizing: border-box;
    width: 80%;
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

export const Form = styled.form`
    margin: 10px;
    text-align: end
`

export const Inp = styled.input`
    border-radius: 5px;
    border: 1px solid #222;
    width: 50%;
    margin: 10px
`

export const AddComment = styled.button`
    background-color: transparent;
    border: none;
        &:hover{
            color: blue
        }
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