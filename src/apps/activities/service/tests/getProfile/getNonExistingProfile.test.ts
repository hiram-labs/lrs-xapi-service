import NoModel from '@hiram-labs/lrs-js-common/dist/errors/NoModel';
import assertError from '@hiram-labs/lrs-js-common/dist/tests/utils/assertError';
import { Warnings } from '@hiram-labs/lrs-js-common/dist/warnings';
import getTestProfile from '../../../utils/getTestProfile';
import { TEST_INVALID_ACTIVITY_ID } from '../../../utils/testValues';
import setup from '../utils/setup';

describe('getProfile with non-existing model', () => {
  setup();

  it('should error when getting a non-existing model', async () => {
    const promise = getTestProfile();
    await assertError(NoModel, promise);
  });

  it('should throw warnings when using an invalid activityId', async () => {
    const promise = getTestProfile({ activityId: TEST_INVALID_ACTIVITY_ID });
    await assertError(Warnings, promise);
  });
});
