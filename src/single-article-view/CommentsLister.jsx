import CommentCard from "./CommentCard";

const CommentsLister = ({comments,users}) => {
    if (comments.length > 0){
        return (
            <ul className="comments-list">
              {comments.map((comment) => {
                return <CommentCard key={comment.comment_id} comment={comment} users={users}/>;
              })}
            </ul>
          );
    }else{
        return <p>No comments... why not post a comment? </p>
    }
};

export default CommentsLister;
