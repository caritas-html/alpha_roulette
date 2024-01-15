import Player from "./Player.js";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Match extends Player {
  constructor(difficult, player1, player2) {
    super(difficult, player1, player2);

    this.currentPlayer = true; // if true (P1 action time), else (P2 action time)

    this.gameStart();
  }

  introduce() {
    rl.question(
      "Russian roulette. Take turns with the virtual revolver, escalating the stakes with each pull. Will you be the last one standing? Load the chamber, make strategic choices, and let the adrenaline-fueled risk unfold. In 'Russian Roulette Royale', only the bravest prevail! \n type YES to start: ",
      (userInput) => {
        let response = userInput.toUpperCase();
        if (response == "YES") {
          console.clear();
          console.log(
            `\n Let the game begin... \n \n \n Difficult: ${this.difficult}, \n Rounds: ${this.gameConfig.rounds}, \n Bullets: ${this.gameConfig.full}, \n Empty Shells: ${this.gameConfig.blank}, \n`
          );
          this.switchPlayerMechanics(this.player1, this.player2);
        } else {
          rl.close();
        }
      }
    );
  }

  action(actor, victim) {
    // action shoot

    //////// MAGAZINE BLOCK //////////
    console.log(this.magazine);

    let damage = 0;
    let lastBullet = this.magazine.pop();

    console.log(lastBullet);

    damage = lastBullet ? 50 : 0;
    //////////////////////////////////

    function shot(player) {
      if (player.life) {
        player.life -= damage;
        let response = `\n Player ${player.name} takes ${damage} damage points. \n `;
        console.log(response);
      }
    }

    rl.question(
      `Current Playing: ${actor.name} \n Actions: \n shot (), \n self shot (). \n \n Your action:`,
      (playerInput) => {
        let input = playerInput.trim("")
        if (
          input == "shot" ||
          input == "shot()"
        ) {
          shot(victim);
        } else if (
          input == "selfshot" ||
          input == "selfshot()"
        ) {
          shot(actor);
        }
        this.switchPlayerMechanics(this.player1, this.player2);
      }
    );
  }

  switchPlayerMechanics(player1, player2) {
    let matchStatus = `\n ${player1.name}: ${player1.life} life points. \n ${player2.name}: ${player2.life} life points. \n`;

    console.clear();

    if (this.currentPlayer) {
      console.log(matchStatus);
      this.action(player1, player2);
      this.currentPlayer = !this.currentPlayer;
    } else {
      console.log(matchStatus);
      this.action(player2, player1);
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
