import * as xapi from '@hiram-labs/lrs-xapi-validation/dist/factory';
import * as rulr from '@hiram-labs/lrs-js-common/dist/warnings';

const rule = rulr.maybe(rulr.optional(xapi.uuid));

export default (data?: string) => {
  return rule(data, ['registration']);
};
