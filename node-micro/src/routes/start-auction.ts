import { Router } from 'express';
import z from 'zod';
import { auctionRepository } from '../core/schemas.js';
import { redis } from '../core/redis.js';

const startAuctionRouter = Router();

startAuctionRouter.post('/auction', async (req, res) => {
  try {
    const { id, title, description, currentBid, nextBid } = z
      .object({
        id: z.string(),
        title: z.string(),
        description: z.string(),
        currentBid: z.number(),
        nextBid: z.number(),
      })
      .parse(req.body);

    await auctionRepository.save(id, {
      id,
      title,
      description,
      currentBid,
      nextBid,
      endTime: new Date().toISOString(),
    });

    await redis.publish(
      `auction:${id}`,
      JSON.stringify({
        id,
        title,
        description,
        currentBid,
        nextBid,
      }),
    );

    return res.status(200).json({
      message: 'Auction created',
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Internal server error',
    });
  }
});

export { startAuctionRouter };
