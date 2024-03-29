import config from '../../../config';
import RepoFactoryConfig from '../repo/FactoryConfig';
import factory from './factory';
import Repo from './Repo';
import connectToMongoDb from '../../../utils/connectToMongoDb';
import connectToRedis from '../../../utils/connectToRedis';

export const repoFactoryConfig: RepoFactoryConfig = {
  auth: {
    facade: config.repoFactory.authRepoName,
    fake: {},
    mongo: {
      db: connectToMongoDb
    }
  },
  events: {
    facade: config.repoFactory.eventsRepoName,
    redis: {
      client: connectToRedis(),
      prefix: config.redis.prefix,
      isQueuePriorityEnabled: config.isQueuePriorityEnabled
    }
  },
  models: {
    facade: config.repoFactory.modelsRepoName,
    mongo: {
      db: connectToMongoDb,
      maxTimeMs: config.defaultTimeout
    }
  },
  storage: {
    facade: config.repoFactory.storageRepoName,
    local: {
      storageDir: config.localStorageRepo.storageDir
    },
    s3: {
      awsConfig: config.s3StorageRepo.awsConfig,
      bucketName: config.s3StorageRepo.bucketName,
      subFolder: config.storageSubFolders.statements
    }
  }
};

const repo: Repo = factory(repoFactoryConfig);

export default repo;
