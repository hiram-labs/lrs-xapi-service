import { S3Client } from '@aws-sdk/client-s3';
import localStorageRepo from '../../localStorageRepo';
import Repo from '../../repoFactory/StorageRepo';
import s3StorageRepo from '../../s3StorageRepo';
import FactoryConfig from './FactoryConfig';

export default (factoryConfig: FactoryConfig): Repo => {
  switch (factoryConfig.factoryName) {
    case 's3':
      return s3StorageRepo({
        bucketName: factoryConfig.s3.bucketName,
        client: new S3Client(factoryConfig.s3.awsConfig),
        subFolder: factoryConfig.s3.subFolder
      });
    default:
    case 'local': {
      return localStorageRepo({
        storageDir: factoryConfig.local.storageDir
      });
    }
  }
};
