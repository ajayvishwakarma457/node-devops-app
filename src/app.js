const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const { errorHandler } = require('./middlewares/error.middleware');
const { loggerMiddleware } = require('./middlewares/logger.middleware');

const app = express();
app.use(cors());
app.use(express.json());
app.use(loggerMiddleware);

app.use('/api', routes);

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: Date.now() });
});

const client = require('prom-client');
const register = new client.Registry();
client.collectDefaultMetrics({ register });

app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});

app.use(errorHandler);

module.exports = app;


