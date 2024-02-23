import LocalFactoryConfig from './utils/localStorage/FactoryConfig';
import S3FactoryConfig from './utils/s3Storage/FactoryConfig';

export default interface Config {
  readonly facade?: string;
  readonly local?: LocalFactoryConfig;
  readonly s3?: S3FactoryConfig;
}
