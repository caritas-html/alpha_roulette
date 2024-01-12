import Player from "./Player.js";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Match extends Player {
  constructor(difficult, player1, player2) {
    super(difficult, player1, player2);

    this.currentPlayer = true;

    this.gameStart();
  }

  introduce() {
    rl.question(
      "Russian roulette. Take turns with the virtual revolver, escalating the stakes with each pull. Will you be the last one standing? Load the chamber, make strategic choices, and let the adrenaline-fueled risk unfold. In 'Russian Roulette Royale', only the bravest prevail! \n type YES to start: ",
      (userInput) => {
        let response = userInput.toUpperCase();
        if (response == "YES") {
          console.clear();
          this.switchPlayerMechanics(this.player1, this.player2);
        } else {
          rl.close();
        }
      }
    );
  }

  action(player) {
    console.log(player);
    // const actionList = {
    //     shoot:
    // }
  }

  switchPlayerMechanics(player1, player2) {
    console.log(
      `\n Let the game begin... \n \n \n Difficult: ${this.difficult}, \n Rounds: ${this.gameConfig.rounds}, \n Bullets: ${this.gameConfig.full}, \n Empty Shells: ${this.gameConfig.blank}, \n \n`
    );

    if (this.currentPlayer) {
      this.action(player1);
      this.currentPlayer = !this.currentPlayer;
    } else {
      action(player2);
      this.currentPlayer = !this.currentPlayer;
    }
  }

  play() {
    this.introduce();
  }
}

const tstMatch = new Match("easy", "leo");

tstMatch.play();

export default Match;
