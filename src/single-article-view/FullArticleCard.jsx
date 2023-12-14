import Voter from "../small-comp/Voter";

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
    author_avatar_url,
    article_id
  },setArticle
}) => {
  const dateConverted = new Date(created_at)
  const postedDateString = dateConverted.toLocaleString("en-GB", options);

  const setOptimFullArticleVote = (voteChange) => {
    setArticle((currArticle) => {
      const modArticle = {...currArticle};
      modArticle.votes + voteChange;
      return modArticle})
  }

  return (
    <section className="full-article-card">
      <section className="article">
        <h4>{topic}</h4>
        <h3>{title}</h3>
        <img src={article_img_url} alt={'Article Image'} />
        <p>{body}</p>
      </section>
      <div className="f-article-mid-panel">
      <img src={author_avatar_url} alt={'Author Avatar Image'} />
      <p>
        {author} posted on {postedDateString}
      </p>
      </div>
      <div className="f-article-bottom-panel">
        <Voter votes={votes} voteeId={article_id} setOptimVote={setOptimFullArticleVote} voteeType={'article'} />
      <div className="comments-link">
        <p>{comment_count} comments</p>
      </div>
      </div>


    </section>
  );
};

export default FullArticleCard;
