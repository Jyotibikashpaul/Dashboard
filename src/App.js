import React from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default App;
