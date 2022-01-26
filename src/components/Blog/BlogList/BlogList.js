import moment from "moment";

 import { BlogListWrapper, MiniPhoto, BlogListElementData, BlogListElementLink, BlogListElementDate, BlogListElement } from "./style";

const BlogList = ({ blogs }) => {
    return(
            <BlogListWrapper>
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
            </BlogListWrapper>
    )
}

export default BlogList;