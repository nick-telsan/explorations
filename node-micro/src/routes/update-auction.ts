import { Router } from 'express';
import z from 'zod';
import { redis } from '../core/redis.js';

const updateAuctionRouter = Router();

updateAuctionRouter.put('/auction/:id', (req, res) => {
  try {
    const { id } = z
      .object({
        id: z.string(),
      })
      .parse(req.params);

    const { currentBid, nextBid } = z
      .object({
        currentBid: z.number(),
        nextBid: z.number(),
      })
      .parse(req.body);

    redis.json.set(`$auction:${id}`, '$', {
      currentBid,
      nextBid,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Internal server error',
    });
  }
});

export { updateAuctionRouter };
