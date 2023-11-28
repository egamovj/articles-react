import  { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ArticleDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const res = await fetch(`https://api.spaceflightnewsapi.net/v3/articles/${id}`);

        if (res.ok) {
          const data = await res.json();
          setArticle(data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchArticle();
  }, [id]);

  if (!article) {
    return <div className='loader'></div>;
  }

  const { title, imageUrl, newsSite, summary, publishedAt } = article;

  return (
    <div style={articleDetailStyles}>
      <img src={imageUrl} alt={title} style={imageStyles} />
      <h2 style={titleStyles}>{title}</h2>
      <p style={infoStyles}>{newsSite}</p>
      <p style={infoStyles}>{summary}</p>
      <p style={infoStyles}>Published: {publishedAt}</p>
    </div>
  );
};

// Styles

const articleDetailStyles = {
  textAlign: 'center',
  padding: '20px',
};

const imageStyles = {
  maxWidth: '300px',
  height: 'auto',
  marginBottom: '10px',
};

const titleStyles = {
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '10px',
};

const infoStyles = {
  marginBottom: '10px',
};

export default ArticleDetail;
