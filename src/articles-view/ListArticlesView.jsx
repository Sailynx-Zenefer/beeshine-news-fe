import ArticleCard from "./ArticleCard";
import { useEffect, useState } from "react";
import { getFromApi,avatarFromAuthor} from "../utils/utils";


const ListArticlesView = ({ users }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getFromApi("/api/articles")
      .then(({ data: { articles } }) => setArticles(articles))
      .catch((err) => console.log(err))
      .finally(() => {});
  }, []);

  return (
    <section className="list-articles-view">
      <ul className="article-list">
        {articles.map((article) => {
          const avatar_url = avatarFromAuthor(article.author, users);
          return (
            <ArticleCard
              key={article.article_id}
              article={article}
              avatar_url={avatar_url}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default ListArticlesView;
