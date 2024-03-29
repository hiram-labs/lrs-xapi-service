import { StatusCodes } from 'http-status-codes';
import assertDeleted from '../../../utils/assertDeleted';
import { route, xapiHeaderVersion } from '../../../utils/constants';
import createTextState from '../../../utils/createTextState';
import {
  ALTERNATE_CONTENT_TYPE,
  TEST_ACTIVITY_ID,
  TEST_MBOX_AGENT,
  TEST_REGISTRATION
} from '../../../utils/testValues';
import setup from '../utils/setup';

describe('expressPresenter.deleteStates using the alternate request syntax', () => {
  const { supertest } = setup();

  it('should delete when deleting text', async () => {
    await createTextState();
    await supertest
      .post(route)
      .set('Content-Type', ALTERNATE_CONTENT_TYPE)
      .set('X-Experience-API-Version', xapiHeaderVersion)
      .query({ method: 'DELETE' })
      .send({
        activityId: TEST_ACTIVITY_ID,
        agent: JSON.stringify(TEST_MBOX_AGENT),
        registration: TEST_REGISTRATION
      })
      .expect(StatusCodes.NO_CONTENT);
    await assertDeleted();
  });
});
