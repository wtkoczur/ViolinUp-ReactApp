
import Photo from "../Photo/Photo";
import { BlogLayout, BlogPosts, Post, MyLinks, AuthorData, AuthorLogo, Excerpt,  MyButton} from "./style";
//import { getPosts } from "../../services";
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarWeek } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'
import BlogList from "../BlogList/BlogList";


const Blog = ({ blogs }) => {

 return(
        <BlogLayout>
            <BlogPosts>
                {blogs.map(e => (
                    <Post key={e.node.slug}>
                        <Photo node={e.node}/>
                        <MyLinks to={`/blog/${e.node.slug}`}>
                            <h1>{e.node.title}</h1>
                        </MyLinks>
                        <AuthorData>
                                <AuthorLogo src={e.node.author.photo.url} alt="author"/>
                                {e.node.author.name}
                            <FontAwesomeIcon style={{color: "#4178fa", margin: "0px 10px 0px 60px"}} icon={faCalendarWeek}></FontAwesomeIcon>
                            {moment(e.node.createdAt).format('MMM DD, YYYY')}

                        </AuthorData>
                        <Excerpt>
                            {e.node.excerpt}
                        </Excerpt>
                        <MyLinks to={`/blog/${e.node.slug}`}>
                                <MyButton>
                                    Czytaj dalej
                                </MyButton>
                        </MyLinks>
                    </ Post>
                ))}
            </BlogPosts>
            <BlogList blogs={blogs} />
        </BlogLayout>
    )
}

export default Blog;