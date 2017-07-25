import React, { Component } from 'react';
import {Provider} from 'react-redux';
import store from '../store';
import './App.css';
import Header from './Header';
import PageBody from './PageBody';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <PageBody />
        </div>
      </Provider>
    );
  }
}

export default App;
