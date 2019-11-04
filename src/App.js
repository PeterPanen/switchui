import React, { Component } from "react";
import HomeScreen from "./screens/HomeScreen";
import GameManager from "./GameManager";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isFullscreen: false,
      games: []
    };
  }

  setAppRef(node) {
    this.appRef = node;
    document.addEventListener(
      "webkitfullscreenchange",
      this.onFullscreenChange
    );
    document.addEventListener("webkitfullscreenerror", this.onFullscreenError);
  }

  onFullscreenChange = e => {
    this.setState(state => ({
      isFullscreen: !state.isFullscreen
    }));
  };

  onFullscreenError(e) {
    console.log("Error", e);
  }

  onGamesChange(games) {
    this.setState({ games });
  }

  render() {
    const { isFullscreen, games } = this.state;
    const fullscreenStyle = isFullscreen
      ? {
          zoom: 1.5
        }
      : {};
    return (
      <div ref={n => this.setAppRef(n)} className="App">
        <div style={fullscreenStyle}>
          <HomeScreen games={games} />
          <button onClick={() => this.appRef.webkitRequestFullscreen()}>
            Fullscreen
          </button>
          <GameManager onGamesChange={games => this.onGamesChange(games)} />
        </div>
      </div>
    );
  }
}

export default App;
