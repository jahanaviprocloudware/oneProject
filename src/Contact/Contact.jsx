import { CommentList } from "./CommentList/CommentList"
import { TextCommentArea } from "./Inbox"

export const Contact = () => {
    return(
        <div className="container mt-5">
        <div className='d-flex justify-content-around align-items-center'>
        <div>
            <CommentList/>
        </div>
        <div>
            <TextCommentArea/>
        </div>
        </div>
        </div>
        
    )
}