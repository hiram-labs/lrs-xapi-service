import NoModel from '@hiram-labs/lrs-js-common/dist/errors/NoModel';
import assertError from '@hiram-labs/lrs-js-common/dist/tests/utils/assertError';
import getTestState from '../../../../utils/getTestState';

export default async () => {
  const promise = getTestState();
  await assertError(NoModel, promise);
};
