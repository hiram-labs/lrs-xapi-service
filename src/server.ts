import * as sourceMapSupport from 'source-map-support';
sourceMapSupport.install();

import tracker from './tracker';
import express from 'express';
import handleListen from '@hiram-labs/lrs-js-common/dist/expressPresenter/utils/handleListen';
import app from './apps/app';
import config from './config';
import logger from './logger';
import connectToMongoDb from './utils/connectToMongoDb';
import connectToRedis from './utils/connectToRedis';

const expressApp = express();

expressApp.use(
  app({
    logger,
    presenter: {
      express: config.express
    },
    repo: {
      local: config.localStorageRepo,
      mongo: {
        db: connectToMongoDb,
        maxTimeMs: config.defaultTimeout
      },
      redis: {
        client: connectToRedis(),
        prefix: config.redis.prefix,
        isQueuePriorityEnabled: config.isQueuePriorityEnabled
      },
      repoFactory: config.repoFactory,
      s3: config.s3StorageRepo,
      storageSubFolders: config.storageSubFolders
    },
    service: {
      statements: config.statementsService
    },
    tracker
  })
);

expressApp.listen(config.express.port, () => {
  if (config.express.port === 80) {
    logger.warn(
      '\n------------------------------------------------------------------\n' +
        '==> ⛔  xAPI port set to 80; this will not work on non-root Node processes' +
        '\n------------------------------------------------------------------\n'
    );
  }
  logger.info(
    '\n------------------------------------------------------------------\n' +
      `==> 🌎  xAPI is listening on port ${config.express.port}.` +
      '\n------------------------------------------------------------------\n'
  );
  handleListen(logger);
});
