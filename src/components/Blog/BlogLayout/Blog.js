
import Photo from "../Photo/Photo";
import { BlogLayout, BlogList, BlogPosts, Post, MyLinks, AuthorData, AuthorLogo, Excerpt, MiniPhoto, BlogListElement, BlogListElementData, BlogListElementDate, BlogListElementLink, MyButton} from "./style";
//import { getPosts } from "../../services";
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarWeek } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'


const Blog = ({ blogs }) => {

 return(
        <div>
            <BlogLayout>
                <BlogPosts>
                    {blogs.map(e => (
                        <Post key={e.node.slug}>
                            <Photo node={e.node}/>
                            <MyLinks to={`/blog/${e.node.slug}`}>
                                    <h1>{e.node.title}</h1>
                            </MyLinks>
                            <AuthorData>
                                <div style={{marginRight: "60px"}}>
                                    <AuthorLogo src={e.node.author.photo.url} alt="author"/>
                                    {e.node.author.name}
                                </div>
                                <FontAwesomeIcon style={{color: "#4178fa", margin: "0px 10px"}} icon={faCalendarWeek}></FontAwesomeIcon>
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
                 <BlogList>
                    <h1>Blogs List</h1>
                    {blogs.map(e => (
                        <div key={e.node.slug}>
                            <BlogListElement>
                                <MiniPhoto src={e.node.featuredImage.url} />
                                <BlogListElementData>
                                    <BlogListElementLink to={`/blog/${e.node.slug}`}>{e.node.title}</BlogListElementLink>
                                    <BlogListElementDate>
                                        {moment(e.node.createdAt).format('MMM DD, YYYY')}
                                    </BlogListElementDate>
                                </BlogListElementData>
                            </BlogListElement>
                        </div>
                    ))}
                </BlogList>
            </BlogLayout>
        </div>

    )
}

export default Blog;