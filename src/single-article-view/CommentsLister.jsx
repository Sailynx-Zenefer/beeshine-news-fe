import CommentAdder from "./CommentAdder";
import CommentCard from "./CommentCard";

const CommentsLister = ({comments,users,setComments,articleId}) => {
    if (comments.length > 0){
        return (
            <ul className="comments-list">
              <CommentAdder article_id={articleId} setComments={setComments}/>
              {comments.map((comment) => {
                return <CommentCard key={comment.comment_id} comment={comment} users={users} setComments={setComments} articleId={articleId}/>;
              })}
            </ul>
          );
    }else{
        return <p>No comments... why not post a comment? </p>
    }
};

export default CommentsLister;
