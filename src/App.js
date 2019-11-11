import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import './App.css';
import NavBar from './NavBar.js';
import HomePage from './pages/HomePage.js';
import AboutPage from './pages/AboutPage.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div id="page-content">
            <Route path="/" component={HomePage} exact />
            <Route path="/about" component={AboutPage} />
          </div>
        </div>
      </Router>
      
    );
  }
}

export default App;
