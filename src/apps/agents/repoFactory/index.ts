import { S3Client } from '@aws-sdk/client-s3';
import config from '../../../config';
import localStorageRepo from '../localStorageRepo';
import mongoAuthRepo from '../mongoAuthRepo';
import mongoModelsRepo from '../mongoModelsRepo';
import s3StorageRepo from '../s3StorageRepo';
import testAuthRepo from '../testAuthRepo';
import AuthRepo from './AuthRepo';
import ModelsRepo from './ModelsRepo';
import Repo from './Repo';
import StorageRepo from './StorageRepo';
import connectToMongoDb from '../../../utils/connectToMongoDb';

/* istanbul ignore next */
const getAuthRepo = (): AuthRepo => {
  switch (config.repoFactory.authRepoName) {
    case 'test':
      return testAuthRepo({});
    default:
    case 'mongo':
      return mongoAuthRepo({
        db: connectToMongoDb
      });
  }
};

/* istanbul ignore next */
const getModelsRepo = (): ModelsRepo => {
  switch (config.repoFactory.modelsRepoName) {
    default:
    case 'mongo':
      return mongoModelsRepo({
        db: connectToMongoDb
      });
  }
};

/* istanbul ignore next */
const getStorageRepo = (): StorageRepo => {
  switch (config.repoFactory.storageRepoName) {
    case 's3':
      return s3StorageRepo({
        bucketName: config.s3StorageRepo.bucketName,
        client: new S3Client(config.s3StorageRepo.awsConfig),
        subFolder: config.storageSubFolders.agents
      });
    default:
    case 'local':
      return localStorageRepo(config.localStorageRepo);
  }
};

export default (): Repo => {
  const authRepo = getAuthRepo();
  const modelsRepo = getModelsRepo();
  const storageRepo = getStorageRepo();

  return {
    ...authRepo,
    ...modelsRepo,
    ...storageRepo,

    clearRepo: async () => {
      await modelsRepo.clearRepo();
      await storageRepo.clearRepo();
    },
    migrate: async () => {
      await modelsRepo.migrate();
      await storageRepo.migrate();
    },
    rollback: async () => {
      await modelsRepo.rollback();
      await storageRepo.rollback();
    }
  };
};
