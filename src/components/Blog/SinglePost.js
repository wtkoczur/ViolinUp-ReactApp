import { Fragment } from "react";
import { useParams } from "react-router-dom";
import Photo from "./Photo";
import moment from "moment";
import { SingleBlogPost, Form,Inp, AddComment, MyBackLinks, SingleBlogPostContent, AuthorData, AuthorLogo, MyBackLinksIcon } from "./style";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faCalendarWeek } from '@fortawesome/free-solid-svg-icons';

const SinglePost = ({ blogs }) => {
    const { blogId } = useParams();
    const { node } = blogs.find((post) => post.node.slug === blogId);



    const getContentFragment = (index, text, obj, type) => {
        let modifiedText = text;

        if (obj) {
          if (obj.bold) {
            modifiedText = (<b key={index}>{text}</b>);
          }

          if (obj.italic) {
            modifiedText = (<em key={index}>{text}</em>);
          }

          if (obj.underline) {
            modifiedText = (<u key={index}>{text}</u>);
          }
        }

        switch (type) {
          case 'heading-one':
            return <h1 key={index}>{modifiedText.map((item, i) => <Fragment key={i}>{item}</Fragment>)}</h1>;
          case 'heading-two':
            return <h2 key={index}>{modifiedText.map((item, i) => <Fragment key={i}>{item}</Fragment>)}</h2>;
          case 'heading-three':
            return <h3 key={index}>{modifiedText.map((item, i) => <Fragment key={i}>{item}</Fragment>)}</h3>;
          case 'paragraph':
            return <p key={index}>{modifiedText.map((item, i) => <Fragment key={i}>{item}</Fragment>)}</p>;
          case 'heading-four':
            return <h4 key={index}>{modifiedText.map((item, i) => <Fragment key={i}>{item}</Fragment>)}</h4>;
          case 'image':
            return (
              <img
                key={index}
                alt={obj.title}
                height={obj.height}
                width={obj.width}
                src={obj.src}
              />
            );
          default:
            return modifiedText;
        }
      };


    return(
        <SingleBlogPost>
            <Photo node={node} />
                <AuthorData>
                    <div style={{marginRight: "60px"}}>
                        <AuthorLogo src={node.author.photo.url} alt="author"/>
                        {node.author.name}
                    </div>
                    <FontAwesomeIcon style={{color: "#4178fa", margin: "0px 10px"}} icon={faCalendarWeek}></FontAwesomeIcon>
                    {moment(node.createdAt).format('MMM DD, YYYY')}

                </AuthorData>
            <h1>{node.title}</h1>
            <SingleBlogPostContent>
                {node.content.raw.children.map((typeObj, index) => {
                    const children = typeObj.children.map((item, itemIndex) => getContentFragment(itemIndex, item.text, item))

                    return getContentFragment(index, children, typeObj, typeObj.type)
                })}
            </SingleBlogPostContent>
            <Form>
                <Inp type="text" placeholder='Dodaj komentarz' />
                <AddComment>Dodaj</AddComment>
            </Form>

            <MyBackLinks to="/blog">
                <MyBackLinksIcon>
                        <FontAwesomeIcon icon={faBackward}></FontAwesomeIcon> Back to blogs
                </MyBackLinksIcon>
            </MyBackLinks>
        </SingleBlogPost>
    )
}

export default SinglePost;