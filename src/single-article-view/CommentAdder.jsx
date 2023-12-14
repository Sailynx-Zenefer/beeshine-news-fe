import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/User";
import { reqFromApi } from "../utils/utils";

const CommentAdder = () => {
    const { userData, setUserData } = useContext(UserContext);
    const [commentInput, setCommentInput] = useState("");

  return (
    <div key={comment_id} className="comment-adder">
      <div className="comment-adder-user">
        <img src={userData.currUser.avatar_url} />
        <p className="adder-username">{userData.currUser.username}</p>
      </div>
      <div className="comment-adder-bulk">
        <input className="comment-adder-input"></input>
        <div className="comment-bottom-panel">
          <button className='post-comment-button'></button>
        </div>
      </div>
    </div>
  );
};

export default CommentAdder;
