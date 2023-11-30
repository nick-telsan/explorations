import { Repository, Schema } from 'redis-om';
import { redis } from './redis.js';

export const auctionSchema = new Schema(
  'auction',
  {
    id: { type: 'string' },
    title: { type: 'string' },
    description: { type: 'string' },
    currentBid: { type: 'number' },
    nextBid: { type: 'number' },
    endTime: { type: 'string' },
  },
  {
    dataStructure: 'HASH',
  },
);

export const auctionRepository = new Repository(auctionSchema, redis);
