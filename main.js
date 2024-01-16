class Game {
  constructor(difficult) {
    this.difficult = difficult;
    this.gameConfig = {};
    this.magazine = [true, true, true, false, false];
  }

  gameSetup() {
    this.gameConfig = {
      rounds: 0,
      bullets: false,
      total: 5,
      full: 3,
      blank: 2,
    };

    switch (this.difficult.toLowerCase()) {
      case "easy":
        this.gameConfig.rounds = 1;
        break;
      case "medium":
        this.gameConfig.rounds = 3;
        break;
      case "hard":
        this.gameConfig.rounds = 5;
        break;
    }
  }

  magazineSetup() {
    const randomSort = () => Math.random() - 0.5;

    this.gameSetup();
    switch (this.gameConfig.rounds) {
      case 1:
        if (this.difficult == "easy") {
          this.magazine.sort(randomSort);
        }
    }
  }

  gameStart() {
    this.magazineSetup();
  }
}

export default Game;
