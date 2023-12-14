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
  article: { title, topic, author, article_img_url, created_at, votes, comment_count },
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
      <img src={article_img_url}/>
      <div className="article-info-upper">
        <h4>{topic}</h4>
        <h3>{title}</h3>
      </div>
      <div className="article-info-lower">
        <p>
          {author} posted on {postedDateString}
        </p>
      </div>
      <div className="comments-link">
        <p>{comment_count} comments</p>
      </div>
    </li>
  );
};

export default ArticleCard;
