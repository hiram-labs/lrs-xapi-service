import Forbidden from '@hiram-labs/lrs-js-common/dist/errors/Forbidden';
import NoModel from '@hiram-labs/lrs-js-common/dist/errors/NoModel';
import assertError from '@hiram-labs/lrs-js-common/dist/tests/utils/assertError';
import getTestProfile from '../../../utils/getTestProfile';
import { TEST_INVALID_SCOPE_CLIENT, TEST_VALID_SCOPE_CLIENT } from '../../../utils/testValues';
import setup from '../utils/setup';

describe('getProfile with scopes', () => {
  setup();

  it('should throw forbidden error when using invalid scope', async () => {
    const promise = getTestProfile({
      client: TEST_INVALID_SCOPE_CLIENT
    });
    await assertError(Forbidden, promise);
  });

  it('should throw no model error when using valid scopes', async () => {
    const promise = getTestProfile({
      client: TEST_VALID_SCOPE_CLIENT
    });
    await assertError(NoModel, promise);
  });
});
