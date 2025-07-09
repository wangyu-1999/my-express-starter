import express from 'express';
import cors from 'cors';
import unknownEndpoint from './middleware/unknown-endpoint.js';
import greetingRoutes from './routes/greeting.routes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api', (_req, res) => {
  res.json({ message: 'Hello, World!' });
});
app.use('/api', greetingRoutes);

app.use(unknownEndpoint);

export default app;
