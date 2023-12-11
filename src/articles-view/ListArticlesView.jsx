import ArticlesLister from "./ArticlesLister"

const ListArticlesView = ({articles}) => {
    return (
    <section className="list-articles-view">
        <ArticlesLister articles={articles}/>
    </section>
    )
}

export default ListArticlesView