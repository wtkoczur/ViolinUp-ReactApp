import logo from '../../img/ViolinUp.png';
import { Nav, NavLinks, StyledLink, MenuBtn } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const NavMenu = () => {
    const toggleMenu = () => {
        return(
            <div>

            </div>
        )
    }

    return(
    <Nav>
        <img src={logo} alt="logo" style={{height: "40px", width: "auto", marginTop: "-10px"}}/>
        <MenuBtn onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
        </MenuBtn>
        <NavLinks>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/violin">Skrzypce</StyledLink>
            {/* <StyledLink to="/shop">Instrumenty</StyledLink> */}
            <StyledLink to="/blog">Blog</StyledLink>
            <StyledLink to="/about">About</StyledLink>
        </NavLinks>

    </Nav>
    )
}

export default NavMenu;