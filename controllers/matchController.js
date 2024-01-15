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
          total: match.gameConfig.total,
          full: match.gameConfig.full,
          blank: match.gameConfig.blank,
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

      res.json(matchStatus);
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getMatchStatus = (req, res) => {
  try {
    if (match) {
      res.json(matchStatus);
    } else {
      res.json({
        message: "There is no match running, try init a match",
      });
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

export const shotAdversary = (req, res) => {
  try {
    const { currentPlayer, playerInput } = req.body;

    if (matchStatus && currentPlayer && playerInput) {
      if (currentPlayer == matchStatus.players.player1.name) {
        if (playerInput.trim("") == "shot") {
          matchStatus.players.player2.life -= 50; // fixed value
        } else if (playerInput.trim("") == "selfshot") {
          matchStatus.players.player1.life -= 50; // fixed value
        } else {
          throw new Error("Player input not accepted.");
        }
      }
      res.json({
        matchStatus: matchStatus.players,
      });
    } else {
      res.json({
        message: "input errors",
      });
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

export default matchStatus;
