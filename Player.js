import Game from "./main.js";

class Player extends Game {
  constructor(difficult, player1, player2 = "PC") {
    super(difficult);
    this.player1 = player1;
    this.player2 = player2;
  }
}

export default Player;
