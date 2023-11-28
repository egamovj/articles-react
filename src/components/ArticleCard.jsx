
import "./ArticleCard.css";

const ArticleCard = (props) => {
  const { title, imageUrl, newsSite, summary, publishedAt } = props.articleData;

  return (
    <div className="article-card">
      <div className="article-card__wrapper">
        <img src={imageUrl} alt={title} className="article-card__image" />
        <div className="article-card__text">
          <span className="article-card__source">{newsSite}</span>
          <span className="article-card__title">Title: {title}</span>
          <span className="article-card__summary">{summary}</span>
          <span className="article-card__published">Published: {publishedAt}</span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
