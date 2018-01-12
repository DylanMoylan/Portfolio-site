import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './reset.css'
import './App.css';

import Header from './components/Header'
import About from './components/About'
import Work from './components/Work'
import WorkList from './components/WorkList'
import textData from './assets/text-data.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/about" component={About} />
          <Route exact path="/" component={WorkList} />
          {
            textData.map((el, index) => {
              return (
                <Route key={el.id} exact path={`/${el.id}`} render={(props) => {
                  return (
                    <Work activeItem={index} />
                  )
                }} />
              )
            })
          }
        </div>
      </Router>
    );
  }
}

export default App;
