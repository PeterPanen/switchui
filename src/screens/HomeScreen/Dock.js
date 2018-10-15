import React, { Component } from "react";
import DockButton from "./DockButton";
import iconNews from "./assets/icon-news.png";
import iconEshop from "./assets/icon-eshop.png";
import iconAlbum from "./assets/icon-album.png";
import iconControllers from "./assets/icon-controllers.png";
import iconSystemSettings from "./assets/icon-system-settings.png";
import iconPowerOff from "./assets/icon-power-off.png";

const dockStyles = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  marginTop: 39,
  height: 100,
  overflow: "visible"
};

class Dock extends Component {
  render() {
    const { buttonSelected } = this.props;

    return (
      <div style={dockStyles}>
        <DockButton
          isHighlighted={buttonSelected === 1}
          text="News"
          icon={iconNews}
        />
        <DockButton
          isHighlighted={buttonSelected === 2}
          text="Nintendo eShop"
          icon={iconEshop}
        />
        <DockButton
          isHighlighted={buttonSelected === 3}
          text="Album"
          icon={iconAlbum}
        />
        <DockButton
          isHighlighted={buttonSelected === 4}
          text="Controllers"
          icon={iconControllers}
        />
        <DockButton
          isHighlighted={buttonSelected === 5}
          text="System Settings"
          icon={iconSystemSettings}
        />
        <DockButton
          isHighlighted={buttonSelected === 6}
          text="Sleep Mode"
          icon={iconPowerOff}
        />
      </div>
    );
  }
}

export default Dock;
