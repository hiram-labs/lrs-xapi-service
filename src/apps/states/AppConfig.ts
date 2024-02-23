import { S3ClientConfig } from '@aws-sdk/client-s3';
import Tracker from '@hiram-labs/lrs-js-common/dist/tracker/Tracker';
import { Db } from 'mongodb';
import { Logger } from 'winston';

export default interface AppConfig {
  readonly logger: Logger;
  readonly tracker: Promise<Tracker>;
  readonly presenter: {
    readonly express: {
      readonly bodyParserLimit: string;
      readonly morganDirectory: string;
    };
  };
  readonly repo: {
    readonly storageSubFolder: string;
    readonly factory: {
      readonly authRepoName: string;
      readonly modelsRepoName: string;
      readonly storageRepoName: string;
    };
    readonly local: {
      readonly storageDir: string;
    };
    readonly s3: {
      readonly awsConfig: S3ClientConfig;
      readonly bucketName: string;
    };
    readonly mongo: {
      readonly db: () => Promise<Db>;
    };
  };
}
