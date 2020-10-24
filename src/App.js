import React, { Component } from 'react';
import PropertyList from './PropertyList';

class App extends Component {

  render() {
    return (
      <div className="app">
        <h1>Park Place Management</h1>
        <div className="two.columns">
          <PropertyList></PropertyList>
        </div>
      </div>
    );
  }
}

export default App;
