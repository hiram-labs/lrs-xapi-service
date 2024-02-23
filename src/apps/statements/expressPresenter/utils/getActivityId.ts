import { createRequiredWarning, Warnings } from '@hiram-labs/lrs-js-common/dist/warnings';

export default (activityIdParam: string | undefined) => {
  if (activityIdParam === undefined) {
    const warnings = [createRequiredWarning(activityIdParam, ['query', 'activityId'])];
    throw new Warnings({}, ['query'], warnings);
  }

  return activityIdParam;
};
