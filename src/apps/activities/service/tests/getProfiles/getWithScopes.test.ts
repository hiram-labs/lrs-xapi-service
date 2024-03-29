import * as assert from 'assert';
import Forbidden from '@hiram-labs/lrs-js-common/dist/errors/Forbidden';
import assertError from '@hiram-labs/lrs-js-common/dist/tests/utils/assertError';
import getTestProfiles from '../../../utils/getTestProfiles';
import { TEST_INVALID_SCOPE_CLIENT, TEST_VALID_SCOPE_CLIENT } from '../../../utils/testValues';
import setup from '../utils/setup';

describe('getProfiles with scopes', () => {
  setup();

  it('should throw forbidden error when using invalid scope', async () => {
    const promise = getTestProfiles({
      client: TEST_INVALID_SCOPE_CLIENT
    });
    await assertError(Forbidden, promise);
  });

  it('should return no models when using valid scopes', async () => {
    const getProfilesResult = await getTestProfiles({
      client: TEST_VALID_SCOPE_CLIENT
    });
    assert.deepStrictEqual(getProfilesResult.profileIds, []);
  });
});
