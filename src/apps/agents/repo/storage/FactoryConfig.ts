import { S3ClientConfig } from '@aws-sdk/client-s3';

export default interface FactoryConfig {
  readonly factoryName: string;
  readonly local: {
    readonly storageDir: string;
  };
  readonly s3: {
    readonly awsConfig: S3ClientConfig;
    readonly bucketName: string;
    readonly subFolder: string;
  };
}
