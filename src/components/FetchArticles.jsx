import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ArticleCard from "./ArticleCard";

const FetchArticles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await fetch('https://api.spaceflightnewsapi.net/v3/articles');

      if (res.ok) {
        const data = await res.json();
        setArticles(data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    return () => setArticles([]);
  }, []);

  return (
    <div className="fetch-articles">
      {loading && (
        <div className="fetch-articles__message loader"></div>
      )}

      {!loading && articles.length === 0 && (
        <div className="fetch-articles__message">No articles found!</div>
      )}

      {!loading && articles.map((article, index) => (
        <Link to={`/article/${article.id}`} key={index} className="article-link">
          <ArticleCard articleData={article} />
        </Link>
      ))}
    </div>
  );
};

export default FetchArticles;
