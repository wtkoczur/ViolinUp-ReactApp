import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Violin from "./components/Violin/Violin";
import NavMenu from './components/NavMenu/NavMenu';
import Shop from './components/Shop/Shop';
import Blog from "./components/Blog/Blog";
import About from "./components/About/About";
import styled from "styled-components";
import Footer from "./components/Footer/Footer";
import img from './img/7.png'
import SinglePost from "./components/Blog/SinglePost";


const MainView = styled.div`
  background-image: url(${img});
  text-align: center;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;

  `;

  const Container = styled.div`
  display: flex;
  min-height: 100vh
  `;

const Content = styled.div`
  width: 95%;
  justify-content: center;
  margin: 0px auto;
  `



function App() {
  const [ blogs, setBlogs ] = useState([]);

  useEffect(() => {
      fetch('https://api-eu-central-1.graphcms.com/v2/ckyh3bg361r2h01z02bzd2qoc/master', {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
              query: `
              query MyQuery {
                  postsConnection {
                    edges {
                      node {
                        author {
                          bio
                          name
                          id
                          photo {
                            url
                          }
                        }
                        createdAt
                        slug
                        title
                        excerpt
                        featuredImage {
                          url
                        }
                        categories {
                          name
                          slug
                        }
                        content {
                          text
                        }
                      }
                    }
                  }
                }
              ` })
          })
          .then(res => {
              return res.json();
          })
          .then(data => {
              console.log(data.data.postsConnection.edges);
              setBlogs(data.data.postsConnection.edges);
          })
      },[])





  return (
    <MainView>
      <NavMenu />
      <Container>
        <Content>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/violin" element={<Violin />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/blog" element={<Blog blogs={blogs}/>} />
            <Route path="/about" element={<About />} />
            <Route path="/blog/:blogId" element={<SinglePost blogs={blogs}/>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Content>
      </Container>
      <Footer />
    </MainView>
  );
}

export default App;
