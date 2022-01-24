import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../../img/ViolinUp.png';

export const Nav = styled.div`
    font-size: 20px;
    background-color: transparent;
    padding: 20px;
    text-align: end;
    display: flex;
    justify-content: space-between
`;


export const StyledLink = styled(Link)`
    color: black;
    text-decoration: none;
    margin: 20px;
    font-weight: 700;
    transition: transform 600ms;
        &:hover {
            color: #05009e;
    }
`


const NavMenu = () => {
    return(
    <Nav>
        <img src={logo} alt="logo" style={{height: "40px", width: "auto", marginTop: "-10px"}}/>
        <div>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/violin">Skrzypce</StyledLink>
            {/* <StyledLink to="/shop">Instrumenty</StyledLink> */}
            <StyledLink to="/blog">Blog</StyledLink>
            <StyledLink to="/about">About</StyledLink>
        </div>

    </Nav>
    )
}

export default NavMenu;