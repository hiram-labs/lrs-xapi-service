import NoModel from '@hiram-labs/lrs-js-common/dist/errors/NoModel';
import assertError from '@hiram-labs/lrs-js-common/dist/tests/utils/assertError';
import getTestProfile from '../../../../utils/getTestProfile';

export default async () => {
  const promise = getTestProfile();
  await assertError(NoModel, promise);
};
