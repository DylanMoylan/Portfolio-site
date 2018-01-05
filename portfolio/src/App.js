import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import './reset.css'
import './App.css';

import Header from './components/Header'
import About from './components/About'
import Work from './components/Work'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/about" component={About} />
          <Route exact path="/" component={Work} />
        </div>
      </Router>
    );
  }
}

export default App;
