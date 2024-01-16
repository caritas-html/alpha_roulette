import Player from "./Player.js";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Match extends Player {
  constructor(difficult, player1, player2) {
    super(difficult, player1, player2);

    this.gameStart();
  }
}

export default Match;
