import setupService from '@hiram-labs/lrs-js-common/dist/tests/utils/setupService';
import Service from '../../../serviceFactory/Service';
import service from '../../../utils/testService';

const setup = setupService(service);

export default (): Service => {
  return setup();
};
