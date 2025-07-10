import cors from 'cors';
import express from 'express';

import postgresErrorHandler from './middleware/postgres-error-handler.js';
import unknownEndpoint from './middleware/unknown-endpoint.js';
import apiRoutes from './routes/api.routes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
  res.json({ message: 'Hello, World!' });
});
app.use('/api', apiRoutes);

app.use(unknownEndpoint);
app.use(postgresErrorHandler);

export default app;
