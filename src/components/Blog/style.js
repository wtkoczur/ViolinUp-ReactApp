import styled from "styled-components";
import { Link } from "react-router-dom";

export const BlogLayout = styled.div`
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-gap: 20px;
`

export const BlogList = styled.section`
    padding: 10 px 10px;
    background-color: rgba(227, 227, 227, 0.9);
    margin: 10px;
    height: 400px;
    border-radius: 8px;
    text-align: start;
    padding: 20px

`
export const MiniPhoto = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50px
`

export const BlogListElement = styled.div`
    display: grid;
    grid-template-columns: 1fr 5fr;
    grid-gap: 15px;
    margin-bottom: 20px

`

export const BlogListElementData = styled.div`
    display: flex;
    flex-flow: column;
`

export const BlogListElementDate = styled.div`
    color: #949494
`

export const BlogListElementLink = styled(Link)`
    text-decoration: none;
    font-size: 20px;
    color: black;
            &:hover{
        color: #525252
    }
`


export const BlogPosts = styled.section`
    padding: 10px;

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
    color: #6e6e6e
`



export const SingleBlogPost = styled.div`
    width: 80%;
    color: black;
    font-size: 17px;
    text-align: center;
    padding: 10px;
    border: 2px solid #bbb;
    border-radius: 8px;
    background-color: #ffffff;
    margin: 10px auto;
    padding-bottom:20px
`

export const Author = styled.p`
    text-align: end;
    font-size: 12px
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

export const MyLinks = styled(Link)`
    text-decoration: none;
    color: black;
        &:hover{
            color: #525252
        }
`

export const BlogPhoto = styled.div`
    width: 95%;
    height: 300px;
    overflow: hidden;
    border-radius: 5px;
    margin: 10px auto;
`
export const AuthorData = styled.div`
    display: flex;
    justify-content: center;
    font-size: 20px;
    margin: 10px 0px
`

export const AuthorLogo = styled.img`
    width: 30px;
    height: auto;
    margin-right: 10px

`


