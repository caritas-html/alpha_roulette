import express from 'express';
import { initGame } from '../controllers/matchController.js';

const router = express.Router();

router.post('/', initGame);

export default router;