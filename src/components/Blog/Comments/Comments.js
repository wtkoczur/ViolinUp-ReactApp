import { AddComment, Form, Inp, Textarea, InputArea } from "./style";

const Comments = () => {
    return(
        <div>
            <Form>
                <h2>Leave a comment</h2>
                  <Textarea name="comment" placeholder="Comment"
                   //value={formData.comment} 
                   //onChange={onInputChange} 
                   />
                   <InputArea>
                       <Inp type="text" placeholder="Name" name="name" 
                        //value={formData.name} 
                        //onChange={onInputChange}
                        />
                        <Inp type="email" placeholder="Email" name="email" 
                        // value={formData.email} 
                        //onChange={onInputChange}
                        />
                   </InputArea>
                  <AddComment
                  type="button" 
                  //onClick={handleCommentSubmission}
                  >Dodaj</AddComment>
              </Form>
        </div>
    )
}

export default Comments;