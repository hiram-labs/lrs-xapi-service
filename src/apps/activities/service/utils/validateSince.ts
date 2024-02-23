import * as xapi from '@hiram-labs/lrs-xapi-validation/dist/factory';
import * as rulr from '@hiram-labs/lrs-js-common/dist/warnings';

export default (data: string) => {
  return rulr.maybe(xapi.timestamp)(data, ['since']);
};
