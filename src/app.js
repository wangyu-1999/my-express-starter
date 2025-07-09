import express from 'express';
import cors from 'cors';
import greetingRoutes from './routes/greeting.routes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api', (_req, res) => {
  res.json({ message: 'Hello, World!' });
});
app.use('/api', greetingRoutes);

export default app;
