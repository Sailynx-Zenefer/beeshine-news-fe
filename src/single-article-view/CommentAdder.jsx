import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/User";
import { reqFromApi } from "../utils/utils";

function autoResize() {
  this.style.height = 'auto';
  this.style.height = this.scrollHeight + 'px';
  }

const CommentAdder = ({article_id, setComments}) => {
    const { userData, setUserData } = useContext(UserContext);
    const [commentInput, setCommentInput] = useState("");

    useEffect(()=> {
      const textarea = document.querySelector("#autoresizing");
      textarea.addEventListener('input', autoResize, false);
    },[document.querySelector("#autoresizing")])

    useEffect(()=> {
      console.log(userData)
    },[userData])

    const updateCommentInput = (event) => {
      setCommentInput(event.target.value)
    }

    const postComment = () => {
        const commentObj = {
          username: userData.currUser.username,
          body: commentInput
        };
        console.log(commentObj)
        return reqFromApi("post", `/api/articles/${article_id}/comments`, commentObj)
        .then(({data :{comment}}) => {
          console.log(comment)
          setCommentInput('');
          setUserData((currUserData) => {
            const modUserData = { ...currUserData };
            modUserData.comments = [comment.comment_id,...modUserData.comments]
            return modUserData;
          })
        });  
    }


  return (
    <div className="comment-adder">
      <div className="comment-adder-user">
        <img src={userData.currUser.avatar_url} />
        <p className="adder-username">{userData.currUser.username}</p>
      </div>
      <div className="comment-adder-bulk">
        <textarea id="autoresizing"
        className="comment-adder-input"
        value={commentInput}
        placeholder="Write a comment....   ...   ...   ... . . . . ... .  .. . "
        onChange={updateCommentInput}></textarea>
        <div className="adder-bottom-panel">
          <p> ◼️◻️ ▪️▫️🔸🔹▪️▫️◼️◻️ 🔸🔹🔹◼️◻️ ◼️◻️ ◼️◻️ ▪️▫️🔸🔹▪️▫️◼️◻️ 🔸🔹🔹◼️◻️ ◼️◻️ ◼️◻️ ▪️▫️▫️◼️◻️ 🔸🔹🔹◼️◻️ ◼️◻️ ◼️◻️ ▫️◼️◻️ 🔸🔹🔹◼️◻️ ◼️◻️ ◼️◻️ ▫️◼️◻️ 🔸🔹🔹◼️◻️ ◼️◻️ ◼️◻️ 🔸🔹▪️▫️◼️◻️ 🔸🔹🔹◼️◻️ ◼️◻️ ◼️◻️ ▪️▫️🔸🔹▪️▫️◼️◻️ 🔸🔹🔹◼️◻️ ◼️◻️ ◼️◻️ ▪️▫️🔸🔹▪️▫️◼️◻️ 🔸🔹🔹◼️◻️ ◼️◻️ ◼️◻️ ▪️▫️🔸🔹▪️▫️◼️◻️ 🔸🔹🔹◼️◻️ ◼️◻️ ◼️◻️ ▪️▫️🔸🔹▪️▫️◼️◻️ 🔸🔹🔹◼️◻️ ◼️◻️ ◼️◻️ ▪️▫️🔸🔹▪️▫️◼️◻️ 🔸🔹🔹◼️◻️ ◼️◻️ ◼️◻️ ▪️▫️🔸🔹▪️▫️◼️◻️ 🔸🔹🔹◼️◻️ ◼️◻️ </p>
          <button id='post-comment-button'
          onClick={postComment}>Post Comment!</button>
        </div>
      </div>
    </div>
  );
};

export default CommentAdder;

<textarea >
Try cutting, pasting
or typing here
</textarea>


