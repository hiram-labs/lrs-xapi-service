import * as assert from 'assert';
import NoModel from '@hiram-labs/lrs-js-common/dist/errors/NoModel';
import assertError from '@hiram-labs/lrs-js-common/dist/tests/utils/assertError';
import getTestProfile from './getTestProfile';
import getTestProfiles from './getTestProfiles';

export default async () => {
  // Asserts that the agent has no profiles.
  const getProfilesResult = await getTestProfiles();
  assert.deepStrictEqual([], getProfilesResult.profileIds);

  // Asserts that the profile does not exist.
  const getProfilePromise = getTestProfile();
  await assertError(NoModel, getProfilePromise);
};
