import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import giftData from '../data/gifts.js';  // Fixed path here

const router = express.Router();

// Convert import.meta.url to file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// GET all gifts
router.get('/', (req, res) => {
  res.status(200).json(giftData);
});

// GET a single gift page
router.get('/:giftId', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../public/gift.html'));
});

export default router;