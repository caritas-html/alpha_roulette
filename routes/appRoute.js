import express from "express";
import { getMatchStatus, initGame, shotAdversary } from "../controllers/matchController.js";

const router = express.Router();

router.post("/", initGame);
router.get("/", getMatchStatus);

router.post("/shot", shotAdversary);

export default router;
