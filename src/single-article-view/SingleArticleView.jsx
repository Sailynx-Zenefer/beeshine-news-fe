import { useState, useEffect } from "react";
import FullArticleCard from "./FullArticleCard";
import { useParams } from "react-router-dom";
import { reqFromApi, avatarFromAuthor} from "../utils/utils";
import CommentsLister from "./CommentsLister";


const SingleArticleView = ({users}) => {
    const [article,setArticle] = useState({})
    const [comments,setComments] = useState([])
    const {article_id} = useParams();
    useEffect(() => {
        reqFromApi('get',`/api/articles/${article_id}`)
        .then(({data : {article : articleFromApi}}) => {
            articleFromApi.author_avatar_url = avatarFromAuthor(articleFromApi.author, users)
            setArticle(articleFromApi)
        })
        .then(()=> {
            return reqFromApi('get',`/api/articles/${article_id}/comments`)
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
        <FullArticleCard article={article} setArticle={setArticle}/>
        <CommentsLister comments={comments} users={users} setComments={setComments} articleId={article.article_id}/>
    </section>
    )
}

export default SingleArticleView