import Player from "./Player.js";
import readline from "readline";

class Match extends Player {
  constructor(difficult, player1, player2 = "PC") {
    super(difficult, player1, player2);

    this.gameStart();
  }
}

export default Match;
