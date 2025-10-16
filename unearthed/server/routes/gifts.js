import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import giftData from '../data/gifts.js';  // Import gift data

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

// GET /gifts/ - returns all gifts as JSON
router.get('/', (req, res) => {
  res.status(200).json(giftData);
});

// GET /gifts/:giftId - serves gift.html (create this file later for details page)
router.get('/:giftId', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../../client/public/gift.html'));  // Fixed path: up to root, then client/public
});

export default router;