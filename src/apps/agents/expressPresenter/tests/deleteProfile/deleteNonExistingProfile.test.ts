import { StatusCodes } from 'http-status-codes';
import { TEST_INVALID_AGENT, TEST_INVALID_JSON_CONTENT } from '../../../utils/testValues';
import setup from '../utils/setup';
import deleteProfile from './utils/deleteProfile';

describe('expressPresenter.deleteProfile with non-existing state', () => {
  setup();

  it('should not error when deleting', async () => {
    await deleteProfile().expect(StatusCodes.NO_CONTENT);
  });

  it('should throw warnings when using an invalid agent', async () => {
    await deleteProfile({
      agent: JSON.stringify(TEST_INVALID_AGENT)
    }).expect(StatusCodes.BAD_REQUEST);
  });

  it('should throw warnings when missing the profile id', async () => {
    await deleteProfile({ profileId: undefined }).expect(StatusCodes.BAD_REQUEST);
  });

  it('should throw warnings when missing the agent', async () => {
    await deleteProfile({ agent: undefined }).expect(StatusCodes.BAD_REQUEST);
  });

  it('should throw warnings when using invalid json in agent', async () => {
    await deleteProfile({
      agent: TEST_INVALID_JSON_CONTENT
    }).expect(StatusCodes.BAD_REQUEST);
  });
});
