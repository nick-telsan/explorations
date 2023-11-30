import { Router } from 'express';
import z from 'zod';
import { redis } from '../core/redis.js';
import { auctionRepository } from '../core/schemas.js';

const connectRouter = Router();

connectRouter.get('/_ws/connect/:id', async (req, res) => {
  try {
    const { id } = z
      .object({
        id: z.string(),
      })
      .parse(req.params);

    let auction = await auctionRepository.fetch(id);

    // If the auction doesn't exist, fetch it from WordPress
    // For now, we'll just create a dummy auction
    if (!auction.id) {
      console.log('Auction not found');
      auction = await auctionRepository.save(id, {
        id,
        title: 'Dummy Auction',
        description: 'Auction description',
        currentBid: 0,
        nextBid: 0,
      });
    }

    // Start a new WebSocket connection and immediately send user the latest auction data
    const ws = await req.ws();

    if (auction.endTime && auction.endTime < new Date().toISOString()) {
      console.log('Auction expired');
      ws.send('Auction expired');
      ws.close();
    }

    // Duplicate the Redis client to avoid blocking the main connection
    const client = redis.duplicate();
    await client.connect();

    ws.send(JSON.stringify(auction));

    // Subscribe to auction, publish updates
    await client.subscribe(`auction:${id}`, (message) => {
      console.log(message);
      ws.send(message);
    });

    ws.on('close', () => {
      console.log('Close');
      client.unsubscribe(`auction:${id}`);
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Internal server error',
    });
  }
});

export { connectRouter };
