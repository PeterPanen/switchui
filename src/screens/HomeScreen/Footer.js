import React, { Component } from "react";
import iconSwitch from "./assets/switch-icon.png";
import iconControlsAButton from "./assets/control-a-button.png";

const footerStyles = {
  display: "flex",
  flexWrap: "no-wrap",
  justifyContent: "space-between",
  whiteSpace: "nowrap",
  marginTop: 53,
  marginLeft: 30,
  marginRight: 30,
  borderTop: "1px solid #2f2f2f"
};

const iconWrapperStyles = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  marginTop: 18,
  fontSize: 26,
  color: "#474747",
  paddingRight: 30
};

const Icon = ({ style, icon, width, height }) => {
  return <img style={{ ...style, width, height }} src={icon} alt="" />;
};

class Footer extends Component {
  render() {
    return (
      <div style={footerStyles}>
        <Icon
          style={{ paddingLeft: 25, marginTop: 21 }}
          icon={iconSwitch}
          width={69}
          height={30}
        />
        <div style={iconWrapperStyles}>
          <Icon
            style={{ marginRight: 9 }}
            icon={iconControlsAButton}
            width={25}
            height={26}
          />
          <div>Continue</div>
        </div>
      </div>
    );
  }
}

export default Footer;
