// server.js (corrected version)
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import giftRouter from './routes/gifts.js';  // Import the router from routes

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();  // Create the Express app instance (this was missing!)

// Serve static files from the 'public' directory
app.use(express.static(path.resolve(__dirname, '../public')));

// Use the gifts router for /gifts routes
app.use('/gifts', giftRouter);

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});