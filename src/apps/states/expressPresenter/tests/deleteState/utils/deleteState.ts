import { Test } from 'supertest';
import { route, xapiHeaderVersion } from '../../../../utils/constants';
import { TEST_ACTIVITY_ID, TEST_MBOX_AGENT, TEST_REGISTRATION, TEST_STATE_ID } from '../../../../utils/testValues';
import supertest from '../../utils/supertest';

const options = {
  activityId: TEST_ACTIVITY_ID,
  agent: JSON.stringify(TEST_MBOX_AGENT),
  registration: TEST_REGISTRATION,
  stateId: TEST_STATE_ID
};

export default (optsOverrides: Record<string, unknown> = {}): Test => {
  return supertest
    .delete(route)
    .set('X-Experience-API-Version', xapiHeaderVersion)
    .query({
      ...options,
      ...optsOverrides
    });
};
