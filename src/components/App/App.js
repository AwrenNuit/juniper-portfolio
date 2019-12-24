import React from 'react';
import './App.css';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import Header from '../Header/Header';
import ArtList from '../ArtList/ArtList';
import ThisArt from '../ThisArt/ThisArt';
import About from '../About/About';
import Admin from '../Admin/Admin';

function App() {
  return (
    <div>
      <Header />
      <Router>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </nav>
        <Route exact path="/" component={ArtList} />
        <Route path="/details/:id" component={ThisArt} />
        <Route path="/about" component={About} />
        <Route path="/admin" component={Admin} />
      </Router>
    </div>
  );
}

export default App;
