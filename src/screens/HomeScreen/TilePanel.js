import React, { Component } from "react";
import Tile from "./Tile";

const tilePanelStyles = (position, active) => ({
  display: "flex",
  alignItems: "center",
  whiteSpace: "nowrap",
  marginTop: 47,
  marginLeft: 107,
  transform: `translateX(-${position * 274}px)`,
  transition: "transform 100ms",
  ...(active ? {} : { paddingTop: 9, paddingBottom: 9 })
});

class TilePanel extends Component {
  render() {
    const { active, tileSelected, position, games } = this.props;

    return (
      <div style={tilePanelStyles(position, active)}>
        {games.map((game, idx) => (
          <Tile
            title={game.title}
            isHighlighted={tileSelected === idx + 1}
            cover={game.imageUrl}
          />
        ))}
      </div>
    );
  }
}

export default TilePanel;
