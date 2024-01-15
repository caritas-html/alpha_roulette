class Game {
  constructor(difficult) {
    this.difficult = difficult;
    this.gameConfig = {};
    this.magazine = [];
  }

  gameRandomizer() {
    let choice = false;
    let randomChoice = Math.random();
    if (randomChoice >= 1 / 2) {
      choice = true;
    }
    return choice;
  }

  gameSetup() {
    this.gameConfig = {
      rounds: 0,
      bullets: false,
      total: 5,
      full: 0,
      blank: 0,
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
    let full = 0;
    let blank = 0;

    this.gameSetup();
    switch (this.gameConfig.rounds) {
      case 1:
        if (this.difficult == "easy") {
          for (let i = 0; this.magazine.length < this.gameConfig.total; i++) {
            let choice = this.gameRandomizer();
            if (choice === true && full < 3) {
              full += 1;
              this.magazine.push(choice);
            } else if (blank < 2) {
              blank += 1;
              this.magazine.push(choice);
            }
          }
        }
        this.gameConfig.full = full;
        this.gameConfig.blank = blank;
    }
  }

  gameStart() {
    this.magazineSetup();
  }
}

export default Game;

