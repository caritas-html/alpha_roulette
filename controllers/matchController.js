import Match from "../match.js";

export const initGame = (req, res) => {
  try {
    const { start, user } = req.body;

    if (start && user && user.trim() !== "") {
      const match = new Match("easy", user);
      match.play();

      res.json({
        message: "game started",
      });
    } else {
      throw new Error("Invalid start or user data");
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
