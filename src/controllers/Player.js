import Game from "./main.js";

class Player extends Game {
  constructor(difficult, player1, player2 = "PC") {
    super(difficult);
    this.player1 = {
        name: player1,
        life: 100,
    };
    this.player2 = {
        name: player2,
        life: 100,
    };
  }

}

export default Player;
