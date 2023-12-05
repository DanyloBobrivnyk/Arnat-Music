interface ArticleContentProps {
    article: string;
    slug: string;
}

const ArticleContent = ({ article, slug }: ArticleContentProps) => {
    return (
        <h1>Content of post: {slug}</h1>
    );
}

export default ArticleContent;
