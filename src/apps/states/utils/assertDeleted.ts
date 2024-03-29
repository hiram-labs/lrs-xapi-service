import * as assert from 'assert';
import NoModel from '@hiram-labs/lrs-js-common/dist/errors/NoModel';
import assertError from '@hiram-labs/lrs-js-common/dist/tests/utils/assertError';
import GetStatesOptions from '../serviceFactory/options/GetStatesOptions';
import getTestState from './getTestState';
import getTestStates from './getTestStates';

export default async (optsOverrides: Partial<GetStatesOptions> = {}) => {
  // Asserts that the agent has no states.
  const getStatesResult = await getTestStates(optsOverrides);
  assert.deepStrictEqual([], getStatesResult.stateIds);

  // Asserts that the state does not exist.
  const getStatePromise = getTestState(optsOverrides);
  await assertError(NoModel, getStatePromise);
};
