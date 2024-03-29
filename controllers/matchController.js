import Match from "../match.js";

let match = null;
let matchStatus = null;

export const initGame = (req, res) => {
  try {
    const { start, user } = req.body;

    if (start && user.trim("") != "") {
      match = new Match("easy", user);

      matchStatus = {
        difficult: match.difficult,
        gameConfig: {
          rounds: match.gameConfig.rounds,
          total: match.magazine.length,
          full: match.magazine.filter((el) => el === true).length,
          blank: match.magazine.filter((el) => el === false).length,
        },
        players: {
          player1: {
            name: match.player1.name,
            life: match.player1.life,
          },
          player2: {
            name: match.player2.name,
            life: match.player2.life,
          },
        },
      };

      res.json({
        matchStatus,
      });
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getMatchStatus = (req, res) => {
  try {
    if (match) {
      if (
        matchStatus.players.player1.life >= 0 &&
        matchStatus.players.player2.life >= 0
      ) {
        res.json({ matchStatus });
      }
    } else {
      res.json({
        message: "There is no match running, try init a match",
      });
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

export const shotTime = (req, res) => {
  try {
    const { currentPlayer, playerInput } = req.body;
    let damage = match.magazine.pop() ? 50 : 0;

    if (matchStatus && currentPlayer) {
      if (
        matchStatus.players.player2.life <= 0 ||
        matchStatus.players.player1.life <= 0 ||
        match.magazine.length <= 0
      ) {
        res.json({
          message: "The Player is already dead.",
        });
        return;
      }
      // player 1 action
      else if (currentPlayer == matchStatus.players.player1.name) {
        if (playerInput.trim("") == "shot") {
          matchStatus.players.player2.life -= damage;
          // verify action and deliver self shot
        } else if (playerInput.trim("") == "selfshot") {
          matchStatus.players.player1.life -= damage;
          // else for another different input than shot or self shot
        }
      } else if (currentPlayer === "PC" && playerInput === "") {
        Math.random() >= 0.5
          ? (matchStatus.players.player2.life -= damage)
          : (matchStatus.players.player1.life -= damage);
      }
    } else if (currentPlayer == matchStatus.players.player2.name) {
      //  -----> change to multiplayer sometime, for now (PC action)
    }
    
    matchStatus.gameConfig.total = match.magazine.length;
    matchStatus.gameConfig.full = match.magazine.filter(
      (el) => el === true
    ).length;
    matchStatus.gameConfig.blank = match.magazine.filter(
      (el) => el === false
    ).length;

    res.json({
      matchStatus: matchStatus,
    });
  } catch (error) {
    throw new Error(error.message);
  }
};

export default matchStatus;
