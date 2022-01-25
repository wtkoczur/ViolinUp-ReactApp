import { AuthorLogo } from "../BlogLayout/style";
import { AuthorName, BioWrapper } from "./style";

const Bio = ({ node }) => {
    return(
        <BioWrapper>
            <AuthorLogo src={node.author.photo.url} alt="author"/>
            <AuthorName>{node.author.name}</AuthorName>
            <p>{node.author.bio}</p>
        </BioWrapper>


    )
}

export default Bio;