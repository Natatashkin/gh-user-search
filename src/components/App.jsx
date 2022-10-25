import { Routes, Route } from 'react-router-dom';
import StartPage from '../pages/StartPage/StartPage';
import SearchPage from '../pages/SearchPage/SearchPage';
import Dashboard from '../pages/Dashboard/Dashboard';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};
