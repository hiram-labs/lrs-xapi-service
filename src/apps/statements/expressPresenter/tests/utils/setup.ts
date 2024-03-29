import setupService from '@hiram-labs/lrs-js-common/dist/tests/utils/setupService';
import { Test } from 'supertest';
import Service from '../../../serviceFactory/Service';
import service from '../../../utils/testService';
import supertest from './supertest';
import TestAgent from 'supertest/lib/agent';

const setup = setupService(service);

export interface Result {
  readonly service: Service;
  readonly supertest: TestAgent<Test>;
}

export default (): Result => {
  setup();
  return { service, supertest };
};
