import ArticleCard from "./ArticleCard";
import { useEffect, useState } from "react";
import { reqFromApi,avatarFromAuthor} from "../utils/utils";


const ListArticlesView = ({ users }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    reqFromApi("get","/api/articles")
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
              setArticles={setArticles}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default ListArticlesView;
