import Forbidden from '@hiram-labs/lrs-js-common/dist/errors/Forbidden';
import assertError from '@hiram-labs/lrs-js-common/dist/tests/utils/assertError';
import { TEST_INVALID_SCOPE_CLIENT, TEST_VALID_SCOPE_CLIENT } from '../../../utils/testValues';
import setup from '../utils/setup';
import patchState from './utils/patchState';

describe('patchState with scopes', () => {
  setup();

  it('should throw forbidden error when using invalid scope', async () => {
    const promise = patchState({
      client: TEST_INVALID_SCOPE_CLIENT
    });
    await assertError(Forbidden, promise);
  });

  it('should not throw an error when using valid scopes', async () => {
    await patchState({
      client: TEST_VALID_SCOPE_CLIENT
    });
  });
});
