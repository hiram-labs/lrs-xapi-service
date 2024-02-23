import { createRequiredWarning, Warnings } from '@hiram-labs/lrs-js-common/dist/warnings';

export default (stateIdParam: string | undefined) => {
  if (stateIdParam === undefined) {
    const warnings = [createRequiredWarning(stateIdParam, ['query', 'stateId'])];
    throw new Warnings({}, ['query'], warnings);
  }

  return stateIdParam;
};
