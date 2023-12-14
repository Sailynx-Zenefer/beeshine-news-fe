//options for posted date/time display
import Voter from "../small-comp/Voter";
import { avatarFromAuthor } from "../utils/utils";
let options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  hour12: true,
};

const CommentCard = ({
  comment: { comment_id, body, author, votes, created_at },
  users, setComments, articleId
}) => {
  const author_avatar_url = avatarFromAuthor(author, users);
  const dateConverted = new Date(created_at);
  const postedDateString = dateConverted.toLocaleString("en-GB", options);

  const setOptimCommentVote = (voteChange) => {
    setComments((currComments) => {
      const modComments = {...currComments};
      const index = currComments.findIndex((comment)=> comment.comment_id === comment_id)
      modComments[index].votes + voteChange
      return modComments})
  }

  return (
    <li key={comment_id} className="comment-card">
      <div className="comment-user">
        <img src={author_avatar_url} />
        <p className="author">{author}</p>
      </div>
      <div className="comment-bulk">
        <p className="comment-body">{body}</p>
        <div className="comment-bottom-panel">
          <p className="posted-on">posted on {postedDateString}</p>
          <Voter votes={votes} voteeId={comment_id} setOptimVote={setOptimCommentVote} voteeType={'comment'} parentId={articleId}/>
        </div>
      </div>
    </li>
  );
};

export default CommentCard;
