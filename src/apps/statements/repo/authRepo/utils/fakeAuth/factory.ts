import Facade from '../../Facade';
import getClient from '../../getClient/fake';
import FacadeConfig from './FacadeConfig';
import FactoryConfig from './FactoryConfig';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (_factoryConfig: FactoryConfig = {}): Facade => {
  const facadeConfig: FacadeConfig = {};
  return {
    getClient: getClient(facadeConfig)
  };
};
