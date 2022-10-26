import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header';

const PageLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default PageLayout;
