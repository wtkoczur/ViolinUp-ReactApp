import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { lightBlue } from '../../style';

export const Nav = styled.div`
font-size: 20px;
background-color: transparent;
padding: 20px;
text-align: end;
display: flex;
justify-content: space-between;
    @media (max-width: 700px) {
        display: none;
    }
`

export const StyledLink = styled(Link)`
color: black;
text-decoration: none;
margin: 20px;
font-weight: 700;
transition: transform 600ms;
    &:hover {
        color: ${lightBlue};
}
`

export const MobileStyledLink = styled(Link)`
color: black;
text-decoration: none;
margin: 10px 20px;
font-weight: 700;
transition: transform 600ms;
    &:hover {
        color: #001775;
    }
`

export const NavLinks = styled.div`
    @media (max-width: 700px) {
        display: flex;
        flex-direction: column
    }
`

export const MenuBtn = styled.button`
    background-color: transparent;
    border: none;
    border-radius: 15px;
    font-size: 26px;
        &:hover {
            color: #454545;
        };
    @media (min-width: 700px) {
        display: none;
    }
`

export const MobileNav = styled.div`
    @media (max-width: 700px) {
        font-size: 20px;
        background-color: transparent;
        padding: 20px;
        text-align: end;
        display: flex;
        justify-content: space-between;
    }
    @media (min-width: 700px) {
        display: none
    }
`