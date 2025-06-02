import { useState } from "react";
import { FormWithUser } from "../Form/Form"
import { CommentList } from "./CommentList/CommentList"
import { TextCommentArea } from "./Inbox"

export const Contact = () => {
    const [isCommentUpdated, setIsCommentUpdated] = useState(false);
    return(
        <div className="container mt-5">
        <div className='d-flex justify-content-around align-items-center'>
        <div>
            <CommentList isCommentUpdated={isCommentUpdated} setIsCommentUpdated={setIsCommentUpdated}/>
        </div>
        <div>
            <TextCommentArea setIsCommentUpdated={setIsCommentUpdated}/>
        </div>
        </div>
        <div className="d-flex justify-content-center mt-5">
            <FormWithUser/>
        </div>
        </div>
        
    )
}