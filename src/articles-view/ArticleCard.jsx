import { Link } from "react-router-dom";
import Voter from "../small-comp/Voter";
//options for posted date/time display
let options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  hour12: true,
};

const ArticleCard = ({
  article: {
    title,
    topic,
    author,
    article_img_url,
    created_at,
    votes,
    comment_count,
    article_id,
  },avatar_url,setArticles
}) => {
  const postedDateString = new Intl.DateTimeFormat("en-GB", options).format(
    new Date(created_at)
  );
  const setOptimArticlesVote = (voteChange) => {
    setArticles((currArticles) => {
      const modArticles = [...currArticles];
      const index = modArticles.findIndex((article)=> article.article_id === article_id)
      modArticles[index].votes += voteChange
      return modArticles})
  }

  return (
    <li className="article-card">
      <div className="article-card-top-panel"></div>
      <div className="article-card-bottom-panel"></div>
      <Voter votes={votes} voteeId={article_id} setOptimVote={setOptimArticlesVote} voteeType={'article'}/>
      <img className= "article-img" src={article_img_url} />
      <h4 className="article-card-topic">{topic}</h4>
      <Link className="article-card-title" to={`/articles/${article_id}`}>
        <h3>{title}</h3>
      </Link>
      <img className="avatar-img" src={avatar_url} />
      <p className="article-card-author-posted">
        {author} posted on {postedDateString}
      </p>
      <p className="comments-link">{comment_count} comments</p>
    </li>
  );
};

export default ArticleCard;
