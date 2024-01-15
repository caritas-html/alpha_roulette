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
        player1: match.player1,
        player2: match.player2,
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

export default matchStatus;
