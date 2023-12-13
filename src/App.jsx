import "./App.css";
import { getFromApi } from "./utils/utils";
import { Routes, Route } from "react-router-dom";

import Header from "./head-nav/Header";
import Nav from "./head-nav/nav";
import ListArticlesView from "./articles-view/ListArticlesView";
import SingleArticleView from "./single-article-view/SingleArticleView";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getFromApi("/api/users")
    .then(({ data: { users } }) => setUsers(users))
    .catch((err) => console.log(err))
    .finally(() => {});
  },[])

  return (
    <>
      <div className="head-nav">
        <Header />
        <Nav />
      </div>
      <div className="background"></div>
      <Routes>
        <Route path="/" element={<ListArticlesView users={users}/>} />
        <Route path="/articles/:article_id" element={<SingleArticleView users={users}/>} />
      </Routes>
    </>
  );
}

export default App
