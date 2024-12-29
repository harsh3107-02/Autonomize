import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import RepositoryListPage from './pages/ReporsitryListPage/RepositoryListPage';
import RepositoryDetailPage from './pages/RepositoryDetailPage/RepositoryDetailPage';
import FollowersPage from './pages/FollowerPage/FollowersPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/repos/:username" element={<RepositoryListPage />} />
        <Route path="/repos/:username/:repoName" element={<RepositoryDetailPage />} />
        <Route path="/followers/:username" element={<FollowersPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
