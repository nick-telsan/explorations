import { config } from 'dotenv';
import { redis } from './core/redis.js';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { healthCheckRouter } from './routes/health-check.js';
import { startAuctionRouter } from './routes/start-auction.js';
import { connectRouter } from './routes/connect.js';
import { tinyws } from 'tinyws';
import { updateAuctionRouter } from './routes/update-auction.js';

config();

async function main() {
  await redis.connect();

  const app = express();
  const port = process.env.PORT || 3000;

  const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
  };

  app.use(cors(corsOptions));
  app.use(bodyParser.json());

  app.use('/', healthCheckRouter);
  app.use('/', startAuctionRouter);
  app.use('/', updateAuctionRouter);
  app.use('/', tinyws(), connectRouter);

  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}

main();
