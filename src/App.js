import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Violin from "./components/Violin/Violin";
import NavMenu from './components/NavMenu/NavMenu';
import Shop from './components/Shop/Shop';
import Blog from "./components/Blog/BlogLayout/Blog";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import SinglePost from "./components/Blog/SinglePost/SinglePost";
import { myPost } from "./services";
import { MainView, Container, Content } from './style';


 const fetchData = 'https://api-eu-central-1.graphcms.com/v2/ckyh3bg361r2h01z02bzd2qoc/master'
  //const graphqlAPI = process.env.PUBLIC_GRAPHCMS_ENDPOINT;

function App() {
  const [ blogs, setBlogs ] = useState([]);

  useEffect(() => {
      fetch(fetchData, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
              query: myPost })
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
