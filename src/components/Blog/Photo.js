import { BlogPhoto } from "./style";

const Photo = ({ node }) => {
    return(
        <BlogPhoto>
            {/* <h1 style={{position: "absolute", left: "260px", top: "290px", fontSize: 50}}>{node.title}</h1> */}
            <img style={{margin: "0px auto", width: "100%", height: "auto"}} src= {node.featuredImage.url} alt={node.slug}/>

        </BlogPhoto>
    )
}

export default Photo;