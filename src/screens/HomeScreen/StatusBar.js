import React, { Component } from "react";
import userIcon from "./assets/icon-user.png";
import batteryIcon from "./assets/icon-battery.png";
import wifiIcon from "./assets/icon-wifi.png";

const userButtonStyles = icon => ({
  width: 54,
  height: 54,
  border: "3px solid #FFFFFF",
  borderRadius: 30,
  backgroundColor: "#FFFFFF",
  backgroundImage: `url(${icon})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "contain",
  boxShadow: "0px 0px 6px 1px #dcdcdc"
});
const UserButton = ({ icon }) => <div style={userButtonStyles(icon)} />;

const statusIconStyles = icon => ({
  width: 54,
  height: 54,
  backgroundImage: `url(${icon})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center"
});
const StatusIcon = ({ icon }) => <div style={statusIconStyles(icon)} />;

const statusBarStyles = {
  display: "flex",
  flexWrap: "no-wrap",
  justifyContent: "space-between",
  padding: "35px 60px"
};

const wrapperStyles = {
  display: "flex",
  flexWrap: "no-wrap"
};

class StatusClock extends Component {
  state = {
    hours: new Date().getHours(),
    minutes: new Date().getMinutes()
  };

  styles = {
    padding: "12px 4px",
    fontSize: 30,
    fontWeight: 600,
    color: "#2d2d2d",
    letterSpacing: 2
  };

  componentDidMount() {
    setInterval(this.updateClock.bind(this), 10000);
  }

  updateClock() {
    this.setState({
      hours: new Date().getHours(),
      minutes: new Date().getMinutes()
    });
  }

  render() {
    const { hours, minutes } = this.state;
    return (
      <div style={this.styles}>{`${("0" + hours).slice(-2)}:${(
        "0" + minutes
      ).slice(-2)}`}</div>
    );
  }
}

class StatusBar extends Component {
  render() {
    return (
      <div style={statusBarStyles}>
        <div style={wrapperStyles}>
          <UserButton icon={userIcon} />
        </div>
        <div style={wrapperStyles}>
          <StatusClock />
          <StatusIcon icon={wifiIcon} />
          <StatusIcon icon={batteryIcon} />
        </div>
      </div>
    );
  }
}

export default StatusBar;
