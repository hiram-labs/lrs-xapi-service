import * as assert from 'assert';
import Forbidden from '@hiram-labs/lrs-js-common/dist/errors/Forbidden';
import assertError from '@hiram-labs/lrs-js-common/dist/tests/utils/assertError';
import getTestStates from '../../../utils/getTestStates';
import { TEST_INVALID_SCOPE_CLIENT, TEST_VALID_SCOPE_CLIENT } from '../../../utils/testValues';
import setup from '../utils/setup';

describe('getStates with scopes', () => {
  setup();

  it('should throw forbidden error when using invalid scope', async () => {
    const promise = getTestStates({
      client: TEST_INVALID_SCOPE_CLIENT
    });
    await assertError(Forbidden, promise);
  });

  it('should return no models when using valid scopes', async () => {
    const getStatesResult = await getTestStates({
      client: TEST_VALID_SCOPE_CLIENT
    });
    assert.deepStrictEqual(getStatesResult.stateIds, []);
  });
});
