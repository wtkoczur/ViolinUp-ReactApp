import styled from "styled-components";
import { lightBlue } from "../../../style";

export const Form = styled.form`
    box-sizing: border-box;
    width: 90%;
    margin: 10px auto;
    display:flex;
    flex-direction: column;
    justify-content: center;
    background-color: #fff;
    border-radius: 5px;
    align-items: center;
    padding: 20px;
        @media (max-width: 700px) {
            width: 95%;
        }

`

export const Textarea = styled.textarea`
    height: 100px;
    box-sizing: border-box;
    border-radius: 5px;
    border: 1px solid #222;
    width: 70%;
    margin: 10px;
    border: none;
    background-color: #e3e3e3;
    padding: 10px;

`

export const Inp = styled.input`
    border-radius: 5px;
    box-sizing: border-box;
    border: 1px solid #222;
    border: none;
    padding: 10px;
    background-color: #e3e3e3;
        @media(max-width: 1200px) {
            margin-top: 20px;
            width: 100%
        }
`

export const AddComment = styled.button`
    background-color: ${lightBlue};
    width: 150px;
    border-radius: 15px;
    padding: 5px 10px;
    border: none;
    margin: 20px;
        &:hover{
            font-weight: 700;
        }
`

export const InputArea = styled.div`
    display: grid;
    grid-template-columns: 2fr 2fr;
    grid-gap: 20px;
    width: 70%;
        @media(max-width: 1200px) {
            display: block;
        }
`