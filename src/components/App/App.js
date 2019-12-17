import React from 'react';
import './App.css';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import Header from '../Header/Header';
import ArtList from '../ArtList/ArtList';

function App() {
  return (
    <div>
      <Header />
      <Router>
        <ArtList />
      </Router>
    </div>
  );
}

export default App;
