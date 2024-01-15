import express from "express";
import { getMatchStatus, initGame } from "../controllers/matchController.js";

const router = express.Router();

router.post("/", initGame);
router.get("/", getMatchStatus);

export default router;
