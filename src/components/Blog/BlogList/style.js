import styled from "styled-components";
import { Link } from "react-router-dom";

export const BlogListWrapper = styled.section`
    padding: 10 px 10px;
    background-color: rgba(227, 227, 227, 0.9);
    margin: 10px;
    height: 800px;
    border-radius: 8px;
    text-align: start;
    padding: 20px;
    @media (max-width: 768px) {
        display: none
    }
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