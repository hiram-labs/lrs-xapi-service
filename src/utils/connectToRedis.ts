import { Redis } from 'ioredis';
import { once } from 'lodash';
import config from '../config';
import logger from '../logger';

export default once((): (() => Promise<Redis>) => {
  return once(async () => {
    logger.info('Creating redis connection');
    return new Redis(config.redis.url);
  });
});
