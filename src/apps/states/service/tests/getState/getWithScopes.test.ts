import Forbidden from '@hiram-labs/lrs-js-common/dist/errors/Forbidden';
import NoModel from '@hiram-labs/lrs-js-common/dist/errors/NoModel';
import assertError from '@hiram-labs/lrs-js-common/dist/tests/utils/assertError';
import getTestState from '../../../utils/getTestState';
import { TEST_INVALID_SCOPE_CLIENT, TEST_VALID_SCOPE_CLIENT } from '../../../utils/testValues';
import setup from '../utils/setup';

describe('getState with scopes', () => {
  setup();

  it('should throw forbidden error when using invalid scope', async () => {
    const promise = getTestState({
      client: TEST_INVALID_SCOPE_CLIENT
    });
    await assertError(Forbidden, promise);
  });

  it('should throw no model error when using valid scopes', async () => {
    const promise = getTestState({
      client: TEST_VALID_SCOPE_CLIENT
    });
    await assertError(NoModel, promise);
  });
});
