import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import giftsRouter from './routes/gifts.js';  // Import the gifts router (Step 3)

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();  // Initialize the Express app

// Serve static files from client/public AT /public (e.g., /public/index.html)—matches lab
app.use('/public', express.static(path.resolve(__dirname, '../client/public')));

// Serve scripts from client/public/scripts AT /scripts (e.g., /scripts/gifts.js)—matches lab
app.use('/scripts', express.static(path.resolve(__dirname, '../client/public/scripts')));

// Root route (now hits since static is prefixed—shows "UnEarthed API")
app.get('/', (req, res) => {
  res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">UnEarthed API</h1>');
});

// Mount gifts router at /gifts (Step 3)
app.use('/gifts', giftsRouter);

// Start server on PORT or 3001
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});