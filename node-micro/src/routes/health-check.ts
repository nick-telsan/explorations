import { Router } from 'express';

const healthCheckRouter = Router();

healthCheckRouter.get('/cache-healthcheck?', (_req, res) => {
  return res.status(200).send('OK');
});

export { healthCheckRouter };
