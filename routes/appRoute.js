import express from "express";
import {
  getMatchStatus,
  initGame,
  shotTime,
} from "../controllers/matchController.js";

const router = express.Router();

router.post("/", initGame);
router.get("/", getMatchStatus);

router.post("/shot", shotTime);

export default router;
