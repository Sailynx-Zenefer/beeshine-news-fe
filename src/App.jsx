import "./App.css";
import { useEffect, useState } from "react";

import Header from "./head-nav/Header";
import Nav from "./head-nav/nav";
import ListArticlesView from "./articles-view/ListArticlesView";

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
      <ListArticlesView articles={articles} />
    </>
  );
}

export default App;
