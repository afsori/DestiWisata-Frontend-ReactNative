import React, {Component} from 'react';
import {StatusBar} from 'react-native';

import Navigation from './src/Screen/Navigation/Navigation';

class App extends Component {
  render() {
    return (
      <>
        <StatusBar backgroundColor="#6d63ff" />
        <Navigation />
      </>
    );
  }
}

export default App;
