import React from 'react';
import LineChart from './Linechart';
import PieChart from './Piechart';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="chart-container">
        <h2>Sales vs Orders</h2>
        <LineChart />
      </div>
      <div className="chart-container">
        <h2>Portion of Sales</h2>
        <PieChart />
      </div>
    </div>
  );
};

export default Dashboard;

