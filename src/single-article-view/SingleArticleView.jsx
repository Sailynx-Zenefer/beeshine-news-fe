import { useState, useEffect } from "react";
import FullArticleCard from "./FullArticleCard";
import { useParams } from "react-router-dom";
import { getFromApi, avatarFromAuthor} from "../utils/utils";
import CommentsLister from "./CommentsLister";


const SingleArticleView = ({users}) => {
    const [article,setArticle] = useState({})
    const [comments,setComments] = useState([])
    const {article_id} = useParams();
    useEffect(() => {
        getFromApi(`/api/articles/${article_id}`)
        .then(({data : {article : articleFromApi}}) => {
            articleFromApi.author_avatar_url = avatarFromAuthor(articleFromApi.author, users)
            setArticle(articleFromApi)
        })
        .then(()=> {
            return getFromApi(`/api/articles/${article_id}/comments`)
        })
        .then(({data : {comments}}) => {
            setComments(() => {
                if (Array.isArray(comments)){
                    return comments
                }
            return []})
        })
        .catch((err)=> console.log(err))
        .finally(()=> {})
      },[article])
    return (
    <section className="single-article-view">
        <FullArticleCard article={article}/>
        <p style={{border : "solid red"}}>this is a placeholder for comments</p>{/*placeholder */}
    </section>
    )
}

export default SingleArticleView