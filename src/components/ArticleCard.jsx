
import "./ArticleCard.css";

function formatDate(inputDate) {
  const date = new Date(inputDate);
  const year = date.getFullYear();
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');

  return `${year}-${day}-${month}`;
}

const ArticleCard = (props) => {
  const { title, imageUrl, newsSite, summary, publishedAt } = props.articleData;

  const formattedPublishedAt = formatDate(publishedAt);

  return (
    <div className="article-card">
      <div className="article-card__wrapper">
        <img src={imageUrl} alt={title} className="article-card__image" />
        <div className="article-card__text">
          <span className="article-card__source">{newsSite}</span>
          <span className="article-card__title">Title: {title}</span>
          <span className="article-card__summary">{summary}</span>
          <span className="article-card__published">Published: {formattedPublishedAt}</span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
