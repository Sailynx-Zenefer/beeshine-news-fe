import "./App.css";

import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "./head-nav/Header";
import Nav from "./head-nav/nav";
import ListArticlesView from "./articles-view/ListArticlesView";
import SingleArticleView from "./single-article-view/SingleArticleView";

import { getFromApi } from "./utils/utils";

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getFromApi("/api/articles")
      .then(({ data: { articles } }) => setArticles(articles))
      .catch((err) => console.log(err))
      .finally(() => {});
  }, []);

  return (
    <>
      <div className="head-nav">
        <Header />
        <Nav />
      </div>
      <Routes>
        <Route path="/" element={<ListArticlesView articles={articles} />} />
        <Route path="/articles/:article_id" element={<SingleArticleView />} />
      </Routes>
    </>
  );
}

export default App;
