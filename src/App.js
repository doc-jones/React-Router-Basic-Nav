import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';

import { Route, Link } from 'react-router-dom';

class App extends React.Component {
  constructor() {
    super();
    this.set = '';
  }

  render() {
    return (
      <div className='App'>
      <Navigation />
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route path='/contact' component={Contact} />
      </div>
    );
  }
}



export default App;

//comment to commit
