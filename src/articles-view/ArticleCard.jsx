import { Link } from "react-router-dom";
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
  },avatar_url
}) => {
  const postedDateString = new Intl.DateTimeFormat("en-GB", options).format(
    new Date(created_at)
  );

  return (
    <li className="article-card">
      <div className="article-card-top-panel"></div>
      <div className="article-card-bottom-panel"></div>
      <div className="voter">
        <h3>{votes} votes</h3>
      </div>
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
