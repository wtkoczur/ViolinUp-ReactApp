import {Post, Inp, AddComment, Form, Author } from './style';


const BlogPost = ({ blogs }) => {
    return(
        <div>
            {blogs && blogs.map(e => (
                <Post key={e.id}>
                    <h3>{e.title}</h3>
                    <p>{e.body}</p>
                    <Author>Written by {e.author} 19.03.2021</Author>
                    <Form syle={{display: "flex"}}>
                        <Inp type="text" placeholder='Dodaj komentarz' />
                        <AddComment>Dodaj</AddComment>
                    </Form>
                </Post>
            ))}
        </div>
    )
}

export default BlogPost;