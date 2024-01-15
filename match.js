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

  action(actor, victim) {
    // action shoot

    //////// MAGAZINE BLOCK //////////
    let damage = 0;
    let lastBullet = this.magazine.pop();

    damage = lastBullet ? 50 : 0;
    //////////////////////////////////

    ////// SHOT BLOCK //////////////
    function shot(player) {
      if (player.life) {
        player.life -= damage;
        return player.life;
      }
    }
    ////////////////////////////////

    ////////// ACTION BLOCK /////////

    let input = playerInput.trim("");
    if (input == "shot" || input == "shot()") {
      shot(victim);
    } else if (input == "selfshot" || input == "selfshot()") {
      shot(actor);
    }
    this.switchPlayerMechanics(this.player1, this.player2);

    ////////////////////////////////
  }

  switchPlayerMechanics(player1, player2) {
    let matchStatus = `\n ${player1.name}: ${player1.life} life points. \n ${player2.name}: ${player2.life} life points. \n`;

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
    this.switchPlayerMechanics(this.player1, this.player2);
  }
}

export default Match;
