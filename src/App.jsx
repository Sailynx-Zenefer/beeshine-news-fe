import './App.css'

import axios from "axios"
import {useEffect, useState} from "react"

import ListArticlesView from './articles-view/ListArticlesView'
import Header from './head-nav/Header'
import Nav from './head-nav/nav'

const apiAddress = "https://beeshine-news.onrender.com"

function App() {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    axios
    .get(`${apiAddress}/api/articles`)
    .then(({data : {articles}}) => setArticles(articles))
    .catch((err)=> console.log(err))
    .finally(()=> {})
  },[])



  return (
    <>
    <div className="head-nav">
    <Header/>
    <Nav/>
    </div>
    <ListArticlesView articles={articles}/>
    </>
    )
}

export default App
