import Player from "./Player.js";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Match extends Player {
  constructor(difficult, player1, player2) {
    super(difficult, player1, player2);

    this.playing = player1;
    this.gameStart();
  }

  play() {
    rl.question(
      "Russian roulette. Take turns with the virtual revolver, escalating the stakes with each pull. Will you be the last one standing? Load the chamber, make strategic choices, and let the adrenaline-fueled risk unfold. In 'Russian Roulette Royale', only the bravest prevail! \n type YES to start: ",
      (userInput) => {
        if (userInput == "YES") {
          console.log("Let the game begin...");
        }
        rl.close();
      }
    );
  }

  switchPlayer() {}
}

const tstMatch = new Match("easy", "leo");

tstMatch.play();

export default Match;
