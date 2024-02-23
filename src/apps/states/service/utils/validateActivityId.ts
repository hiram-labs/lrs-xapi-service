import * as xapi from '@hiram-labs/lrs-xapi-validation/dist/factory';
import * as rulr from '@hiram-labs/lrs-js-common/dist/warnings';

const rule = rulr.maybe(xapi.iri);

export default (data: string) => {
  return rule(data, ['activityId']);
};
