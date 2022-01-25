import { AuthorLogo } from "../BlogLayout/style";
import { AuthorName, BioLogo, BioWrapper } from "./style";

const Bio = ({ node }) => {
    return(
        <BioWrapper>
            <BioLogo>
                <img src={node.author.photo.url} alt="author"/>
            </BioLogo>
            <AuthorName>{node.author.name}</AuthorName>
            <p>{node.author.bio}</p>
        </BioWrapper>


    )
}

export default Bio;