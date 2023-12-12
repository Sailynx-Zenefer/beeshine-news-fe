//options for posted date/time display
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  hour12: true,
};

const FullArticleCard = ({
  article: {
    title,
    topic,
    author,
    body,
    article_img_url,
    created_at,
    votes,
    comment_count,
  },
}) => {
  console.log(created_at)
  const dateConverted = new Date(created_at)
  const postedDateString = dateConverted.toLocaleString("en-GB", options);

  return (
    <section className="full-article-card">
      <section className="article">
        <h4>{topic}</h4>
        <h3>{title}</h3>
        <p>{body}</p>
        <img src={article_img_url} alt={'Article Image'} />
      </section>
      <p>
        {author} posted on {postedDateString}
      </p>

      <div className="voter">
        <h3>{votes} votes</h3>
      </div>
      <div className="comments-link">
        <p>{comment_count} comments</p>
      </div>
    </section>
  );
};

export default FullArticleCard;
