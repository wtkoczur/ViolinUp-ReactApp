import logo from '../../img/ViolinUp.png';
import { Nav, NavLinks, StyledLink, MenuBtn, MobileNav, MobileStyledLink } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState, Fragment } from 'react';


const NavMenu = () => {

    const [ open, setOpen ] = useState(false)
    const toggleMenu = (e) => {
        e.preventDefault();
        setOpen(!open)
        console.log('Kliknięto na przycisk Menu');
        console.log(open);
    }

    return(
        <>
            <Nav>
                <img src={logo} alt="logo" style={{height: "40px", width: "auto", marginTop: "-10px"}}/>
                    <NavLinks>
                        <StyledLink to="/">Home</StyledLink>
                        <StyledLink to="/violin">Skrzypce</StyledLink>
                        <StyledLink to="/blog">Blog</StyledLink>
                        <StyledLink to="/about">About</StyledLink>
                    </NavLinks>
            </Nav>

            <MobileNav>
                <img src={logo} alt="logo" style={{height: "40px", width: "auto", marginTop: "-10px"}}/>
                <div>
                    <MenuBtn onClick={toggleMenu}>
                        <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                    </MenuBtn>

                    {open ?
                        <NavLinks>
                            <MobileStyledLink to="/">Home</MobileStyledLink>
                            <MobileStyledLink to="/violin">Skrzypce</MobileStyledLink>
                            <MobileStyledLink to="/blog">Blog</MobileStyledLink>
                            <MobileStyledLink to="/about">About</MobileStyledLink>
                        </NavLinks>
                        :
                        ""
                    }
                </div>
                
            </MobileNav>
        </>
        )
}

export default NavMenu;