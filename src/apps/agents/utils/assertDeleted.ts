import * as assert from 'assert';
import NoModel from '@hiram-labs/lrs-js-common/dist/errors/NoModel';
import assertError from '@hiram-labs/lrs-js-common/dist/tests/utils/assertError';
import GetProfilesOptions from '../serviceFactory/options/GetProfilesOptions';
import getTestProfile from './getTestProfile';
import getTestProfiles from './getTestProfiles';

export default async (optsOverrides: Partial<GetProfilesOptions> = {}) => {
  // Asserts that the agent has no profiles.
  const getProfilesResult = await getTestProfiles(optsOverrides);
  assert.deepStrictEqual([], getProfilesResult.profileIds);

  // Asserts that the profile does not exist.
  const getProfilePromise = getTestProfile(optsOverrides);
  await assertError(NoModel, getProfilePromise);
};
