import { useState, useEffect } from "react";
import FullArticleCard from "./FullArticleCard";
import { useParams } from "react-router-dom";
import { getFromApi } from "../utils/utils";


const SingleArticleView = () => {
    const [article,setArticle] = useState({})
    const {article_id} = useParams();
    useEffect(() => {
        getFromApi(`/api/articles/${article_id}`)
        .then(({data : {article : articleFromApi}}) => {
            setArticle(articleFromApi)
        })
        .catch((err)=> console.log(err))
        .finally(()=> {})
      },[])

    return (
    <section className="single-article-view">
        <FullArticleCard article={article}/>
    </section>
    )
}

export default SingleArticleView

// : {
//     title,
//     topic,
//     author,
//     body,
//     article_img_url,
//     created_at,
//     votes,
//     comment_count,
//   }