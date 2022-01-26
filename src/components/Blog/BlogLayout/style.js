import styled from "styled-components";
import { Link } from "react-router-dom";
import { lightBlue } from "../../../style";

export const BlogLayout = styled.div`
    display: grid;
    grid-template-columns: 5fr 2fr;
    grid-gap: 20px;
    @media (max-width: 1100px) {
        grid-template-columns: 2fr 1fr;
    }
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

export const BlogPosts = styled.section`
    padding: 10px;
    width: 90%;
`

export const BlogPost = styled.div`
    color: black;
    padding: 10 px 20px;

`

export const Post = styled.div`
    color: black;
    font-size: 17px;
    text-align: center;
    padding: 10px;
    border-radius: 8px;
    background-color: rgba(227, 227, 227, 0.9);
    margin-bottom: 40px;
    padding-bottom: 20px
`

export const Excerpt = styled.div`
    margin: 30px auto;
    width: 70%;
    font-size: 20px;
    color: #6e6e6e;
        @media (max-width: 700px) {
            width: 95%;
        }
`


export const Author = styled.p`
    text-align: end;
    font-size: 12px
`


export const MyLinks = styled(Link)`
    text-decoration: none;
    color: black;
    transition: 0.7s;
        &:hover{
            color: #525252;
        }
`

export const BlogPhoto = styled.div`
    width: 95%;
    height: 300px;
    overflow: hidden;
    border-radius: 5px;
    margin: 10px auto;
    -webkit-box-shadow: 0px 0px 7px 0px rgba(66, 68, 90, 1);
    -moz-box-shadow: 0px 0px 7px 0px rgba(66, 68, 90, 1);
    box-shadow: 0px 0px 7px 0px rgba(66, 68, 90, 1);
        @media (max-width: 600px) {
            height: 180px
        }
`

export const AuthorData = styled.div`
    display: flex;
    justify-content: center;
    font-size: 20px;
    margin: 20px 0px
`

export const AuthorLogo = styled.img`
    width: 30px;
    height: auto;
    margin-right: 10px;
`

export const MyButton = styled.button`
    border-radius: 10px;
    border: none;
    padding: 8px 10px;
        &:hover {
            transition: 600ms;
            transform: translateY(-10px);
            color: ${lightBlue}
`
