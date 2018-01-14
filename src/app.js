import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {

  render() {

    console.log('App.render');

    return (
      <div>Hallo</div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
