import { Link } from "react-router-dom";
import styled from "styled-components";
import { MyButton } from "../Blog/BlogLayout/style";


const About = () => {
    return(
        <div>
            <h1>About</h1>
            <h3>O autorach</h3>
            <h2>Wanna play a little game?</h2>
            <a href="https://memory-instrument-edition.herokuapp.com/">
                <MyButton>PLAY GAME</MyButton>
            </a>
        </div>
    )
}

export default About;