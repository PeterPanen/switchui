import React, { Component } from "react";
import "./GameManager.css";

class GameManager extends Component {
  constructor() {
    super();
    this.state = {
      games: [
        {
          title: "Pokémon Shield ™",
          imageUrl:
            "https://cdn.shopify.com/s/files/1/0098/2751/6475/products/pokemon-shield-nintendo-switch.jpg?v=1559397925"
        },
        {
          title: "Red Dead Redemption 2",
          imageUrl:
            "https://media.rockstargames.com/rockstargames-newsite/img/global/downloads/buddyiconsconavatars/rdr2_arthur_morgan_256x256.jpg"
        },
        {
          title: undefined,
          imageUrl: undefined
        },
        {
          title: undefined,
          imageUrl: undefined
        },
        {
          title: undefined,
          imageUrl: undefined
        },
        {
          title: undefined,
          imageUrl: undefined
        },
        {
          title: undefined,
          imageUrl: undefined
        },
        {
          title: undefined,
          imageUrl: undefined
        }
      ]
    };
  }

  componentDidMount() {
    this.props.onGamesChange(this.state.games);
  }

  onGameChangeTitle(id, newTitle) {
    let newGames = this.state.games;
    newGames[id].title = newTitle;
    this.setState(
      {
        games: newGames
      },
      () => this.props.onGamesChange(this.state.games)
    );
  }

  onGameChangeUrl(id, newUrl) {
    let newGames = this.state.games;
    newGames[id].imageUrl = newUrl;
    this.setState(
      {
        games: newGames
      },
      () => this.props.onGamesChange(this.state.games)
    );
  }

  render() {
    const { games } = this.state;
    return (
      <div className="GameManager">
        <div>
          {games.map((game, idx) => (
            <div>
              <input
                type="text"
                placeholder="Title"
                value={game.title}
                onChange={e => this.onGameChangeTitle(idx, e.target.value)}
              />
              <input
                type="text"
                placeholder="Image URL"
                value={game.imageUrl}
                onChange={e => this.onGameChangeUrl(idx, e.target.value)}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default GameManager;
