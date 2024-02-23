import Forbidden from '@hiram-labs/lrs-js-common/dist/errors/Forbidden';
import assertError from '@hiram-labs/lrs-js-common/dist/tests/utils/assertError';
import { TEST_INVALID_SCOPE_CLIENT, TEST_VALID_SCOPE_CLIENT } from '../../../utils/testValues';
import setup from '../utils/setup';
import deleteState from './utils/deleteState';

describe('deleteState with scopes', () => {
  setup();

  it('should throw forbidden error when using invalid scope', async () => {
    const promise = deleteState({
      client: TEST_INVALID_SCOPE_CLIENT
    });
    await assertError(Forbidden, promise);
  });

  it('should not error when using valid scopes', async () => {
    await deleteState({
      client: TEST_VALID_SCOPE_CLIENT
    });
  });
});
