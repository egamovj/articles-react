import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FetchArticles from '../src/components/FetchArticles';
import ArticleDetail from '../src/components/ArticleDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FetchArticles />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
