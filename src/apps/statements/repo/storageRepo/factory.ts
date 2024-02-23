import Facade from './Facade';
import FactoryConfig from './FactoryConfig';
import localFactory from './utils/localStorage/factory';
import s3Factory from './utils/s3Storage/factory';

export default (config: FactoryConfig): Facade => {
  switch (config.facade) {
    case 's3':
      return s3Factory(config.s3);
    case 'local':
    default:
      return localFactory(config.local);
  }
};
