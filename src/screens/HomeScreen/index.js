import React, { Component } from "react";
import StatusBar from "./StatusBar";
import TilePanel from "./TilePanel";
import Footer from "./Footer";
import Dock from "./Dock";
import "./stylesheet.css";

class HomeScreen extends Component {
  state = {
    activePane: 1,
    tileSelected: 1,
    position: 0,
    buttonSelected: 0
  };

  componentDidMount() {
    window.addEventListener("keydown", this.updateSelected.bind(this));
  }

  updateSelected(e) {
    const { activePane, tileSelected, position, buttonSelected } = this.state;

    if (e.keyCode === 13) {
      window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }

    // Arrow left
    if (e.keyCode === 37) {
      if (activePane === 1) {
        if (tileSelected > 1) {
          if (tileSelected - position === 1) {
            this.setState(state => ({
              tileSelected: state.tileSelected - 1,
              position: state.position - 1
            }));
          } else {
            this.setState(state => ({
              tileSelected: state.tileSelected - 1
            }));
          }
        }
      } else {
        if (buttonSelected > 1) {
          this.setState(state => ({
            buttonSelected: state.buttonSelected - 1
          }));
        }
      }
    }

    // Arrow right
    if (e.keyCode === 39) {
      if (activePane === 1) {
        if (tileSelected < 9) {
          if (tileSelected - position === 4) {
            this.setState(state => ({
              tileSelected: state.tileSelected + 1,
              position: state.position + 1
            }));
          } else {
            this.setState(state => ({
              tileSelected: state.tileSelected + 1
            }));
          }
        }
      } else {
        if (buttonSelected < 6) {
          this.setState(state => ({
            buttonSelected: state.buttonSelected + 1
          }));
        }
      }
    }

    // Arrow down
    if (e.keyCode === 40) {
      if (activePane === 2) {
        return;
      } else {
        if (tileSelected - position === 1) {
          this.setState(state => ({
            activePane: 2,
            tileSelected: 0,
            buttonSelected: 1
          }));
        } else if (tileSelected - position === 2) {
          this.setState(state => ({
            activePane: 2,
            tileSelected: 0,
            buttonSelected: 2
          }));
        } else if (tileSelected - position === 3) {
          this.setState(state => ({
            activePane: 2,
            tileSelected: 0,
            buttonSelected: 4
          }));
        } else if (tileSelected - position === 4) {
          this.setState(state => ({
            activePane: 2,
            tileSelected: 0,
            buttonSelected: 6
          }));
        }
      }
    }

    // Arrow up
    if (e.keyCode === 38) {
      if (activePane === 1) {
        return;
      } else {
        if (buttonSelected === 1) {
          this.setState(state => ({
            activePane: 1,
            tileSelected: position + 1,
            buttonSelected: 0
          }));
        } else if (buttonSelected === 2 || buttonSelected === 3) {
          this.setState(state => ({
            activePane: 1,
            tileSelected: position + 2,
            buttonSelected: 0
          }));
        } else if (buttonSelected === 4 || buttonSelected === 5) {
          this.setState(state => ({
            activePane: 1,
            tileSelected: position + 3,
            buttonSelected: 0
          }));
        } else if (buttonSelected === 6) {
          this.setState(state => ({
            activePane: 1,
            tileSelected: position + 4,
            buttonSelected: 0
          }));
        }
      }
    }
  }

  render() {
    const { activePane, buttonSelected, tileSelected, position } = this.state;
    return (
      <div className="HomeScreen">
        <StatusBar />
        <TilePanel
          active={activePane === 1}
          tileSelected={tileSelected}
          position={position}
        />
        <Dock active={activePane === 2} buttonSelected={buttonSelected} />
        <Footer />
      </div>
    );
  }
}

export default HomeScreen;
