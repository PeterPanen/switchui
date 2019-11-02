import React, { Component } from "react";
import Tile from "./Tile";
import coverSnipperclips from "./assets/cover-snipperclips.png";
import coverGta from "./assets/cover-gta.jpg";
import coverMarioOddysey from "./assets/cover-mario-oddysey.png";
import coverMarioRabbids from "./assets/cover-mario-rabbids.png";
import coverMarioKart from "./assets/cover-mariokart.png";
import coverPokken from "./assets/cover-pokken.png";
import coverShovelKnight from "./assets/cover-shovel-knight.png";
import coverSplatoon from "./assets/cover-splatoon.png";
import coverPokemonShield from "./assets/cover-pokemon-shield.png";

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
    const { active, tileSelected, position } = this.props;

    return (
      <div style={tilePanelStyles(position, active)}>
        <Tile
          title="Pokémon Shield ™"
          isHighlighted={tileSelected === 1}
          cover={coverPokemonShield}
        />
        <Tile
          title="Grand Theft Auto V"
          isHighlighted={tileSelected === 2}
          cover={coverGta}
        />
        <Tile
          title="Super Mario Oddysey"
          cover={coverMarioOddysey}
          isHighlighted={tileSelected === 3}
        />
        <Tile
          title="Pokken Tournament DX"
          cover={coverPokken}
          isHighlighted={tileSelected === 4}
        />
        <Tile
          title="Mario + Rabbids: Kingdom Battle"
          cover={coverMarioRabbids}
          isHighlighted={tileSelected === 5}
        />
        <Tile
          title="Shovel Knight: Treasure Trove"
          cover={coverShovelKnight}
          isHighlighted={tileSelected === 6}
        />
        <Tile
          title="Snipperclips"
          isHighlighted={tileSelected === 7}
          cover={coverSnipperclips}
        />
        <Tile
          title="Splatoon 2"
          cover={coverSplatoon}
          isHighlighted={tileSelected === 8}
        />
        <Tile
          title="Mario Kart 8 Deluxe"
          cover={coverMarioKart}
          isHighlighted={tileSelected === 9}
        />
      </div>
    );
  }
}

export default TilePanel;
