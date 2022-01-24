import { useParams } from "react-router-dom";
import Photo from "./Photo";
import { SingleBlogPost, Form,Inp, AddComment, MyLinks } from "./style";

const SinglePost = ({ blogs }) => {
    const { blogId } = useParams();
    const { node } = blogs.find((post) => post.node.slug === blogId);


    return(
        <SingleBlogPost>
            <Photo node={node} />
            <h1>{node.title}</h1>
            <p>{node.content.text}</p>
            <Form syle={{display: "flex"}}>
                <Inp type="text" placeholder='Dodaj komentarz' />
                <AddComment>Dodaj</AddComment>
            </Form>

            <MyLinks to="/blog">Back to blogs</MyLinks>
        </SingleBlogPost>
    )
}

export default SinglePost;