import styled from "styled-components";
import img from './img/7.png'

export const MainView = styled.div`
background-image: url(${img});
text-align: center;
background-position: center;
background-repeat: no-repeat;
background-attachment: fixed;
background-size: cover;

`

export const Container = styled.div`
display: flex;
min-height: 100vh
`

export const Content = styled.div`
width: 95%;
justify-content: center;
margin: 0px auto;
@media (min-width: 1400px) {
  width: 70%
}
`

export const lightBlue = "#4178fa"