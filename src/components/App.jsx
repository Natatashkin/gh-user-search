import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import SearchPage from '../pages/SearchPage/SearchPage';
import Dashboard from '../pages/Dashboard/Dashboard';
import { PageLayout } from './PageLayout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};
