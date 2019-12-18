import React from 'react';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';
import Header from '../Header/Header';
import ArtList from '../ArtList/ArtList';

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Route path="/" component={ArtList} />
      </Router>
    </div>
  );
}

export default App;
