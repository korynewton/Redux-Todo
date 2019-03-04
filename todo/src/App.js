import React, { Component } from 'react';

import InputBar from './containers/InputBar'
import Todos from './containers/Todos'

import './App.css';


class App extends Component {
  render() {
    return (
      <>
        <InputBar />
        <Todos />
      </>
    );
  }
}

export default App;
