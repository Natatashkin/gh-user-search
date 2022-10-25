import React from 'react';
import { useUser } from '../../context/UserContext';

const Dashboard = () => {
  const { user } = useUser();
  console.log(user);
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
};

export default Dashboard;
