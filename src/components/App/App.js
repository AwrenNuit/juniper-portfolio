import React from 'react';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';
import Header from '../Header/Header';
import ArtList from '../ArtList/ArtList';
import Admin from '../Admin/Admin';

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Route exact path="/" component={ArtList} />
        <Route path="/admin" component={Admin} />
      </Router>
    </div>
  );
}

export default App;
