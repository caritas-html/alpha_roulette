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

  action(actor, victim) {
    // action shoot
    let damage = 50; // fixed value for now (todo: make it dynamic)
    function shot(player) {
      if (player.life) {
        player.life -= damage;
        return `Player ${player} takes ${damage} damage points. Player has ${player.life} life points.`;
      }
    }

    rl.question(
      `Current Playing: ${actor.name} \n Life Points: ${actor.life} \n Actions: \n shot (), \n self shot (). \n \n Your action:`,
      (playerInput) => {
        if (
          playerInput.trim("") == "shot" ||
          playerInput.trim("") == "shot()"
        ) {
          victim.life -= damage;
          console.log({
            actor: actor.life,
            victim: victim.life,
          });
        } else if (
          playerInput.trim("") == "self shot" ||
          playerInput.trim("") == "self shot ()"
        ) {
          actor.life -= damage;
        }
      }
    );
  }

  switchPlayerMechanics(player1, player2) {
    console.log(
      `\n Let the game begin... \n \n \n Difficult: ${this.difficult}, \n Rounds: ${this.gameConfig.rounds}, \n Bullets: ${this.gameConfig.full}, \n Empty Shells: ${this.gameConfig.blank}, \n`
    );

    if (this.currentPlayer) {
      this.action(player1, player2);
      this.currentPlayer = !this.currentPlayer;
    } else {
      action(player2, player1);
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
