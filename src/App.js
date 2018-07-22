import React, { Component } from 'react';
import HomeScreen from './screens/HomeScreen';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isFullscreen: false,
    };
  }

  setAppRef(node) {
    this.appRef = node;
    document.addEventListener('webkitfullscreenchange', this.onFullscreenChange);
    document.addEventListener('webkitfullscreenerror', this.onFullscreenError);
  }

  onFullscreenChange = (e) => {
    this.setState(state => ({
      isFullscreen: !state.isFullscreen,
    }));
  }

  onFullscreenError(e) {
    console.log('Error', e);
  }

  render() {
    const { isFullscreen } = this.state;
    const fullscreenStyle = isFullscreen ? {
      transform: 'scale3d(1.5, 1.5, 1)',
    } : {};
    return (
      <div style={fullscreenStyle} ref={(n) => this.setAppRef(n)} className="App">
        <HomeScreen />
        <button onClick={() => this.appRef.webkitRequestFullscreen()}>Fullscreen</button>
      </div>
    );
  }
}

export default App;
