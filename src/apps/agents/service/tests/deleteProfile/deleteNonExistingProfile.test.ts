import assertError from '@hiram-labs/lrs-js-common/dist/tests/utils/assertError';
import { Warnings } from '@hiram-labs/lrs-js-common/dist/warnings';
import { TEST_INVALID_AGENT } from '../../../utils/testValues';
import setup from '../utils/setup';
import deleteProfile from './utils/deleteProfile';

describe('deleteProfile with non-existing profile', () => {
  setup();

  it('should not error when deleting', async () => {
    await deleteProfile();
  });

  it('should throw warnings when using an invalid agent', async () => {
    const promise = deleteProfile({ agent: TEST_INVALID_AGENT });
    await assertError(Warnings, promise);
  });
});
