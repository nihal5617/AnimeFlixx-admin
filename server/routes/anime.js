import express from 'express';

import { addAnime } from '../controllers/anime.js';

const router = express.Router();

router.post("/", addAnime);

export default router;