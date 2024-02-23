import { createRequiredWarning, Warnings } from '@hiram-labs/lrs-js-common/dist/warnings';

export default (profileIdParam: string | undefined) => {
  if (profileIdParam === undefined) {
    const warnings = [createRequiredWarning(profileIdParam, ['query', 'profileId'])];
    throw new Warnings({}, ['query'], warnings);
  }

  return profileIdParam;
};
