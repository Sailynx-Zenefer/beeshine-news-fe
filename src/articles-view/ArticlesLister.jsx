import ArticleCard from "./ArticleCard"

const ArticlesLister = ({articles}) => {
    return (
        <ul className='article-list'>
            {articles.map((article) => {
                return <ArticleCard article={article}/>
            })}
        </ul>
    )
}

export default ArticlesLister