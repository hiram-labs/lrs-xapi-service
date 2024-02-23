import { version as validateVersion } from '@hiram-labs/lrs-xapi-validation/dist/factory';
import * as rulr from '@hiram-labs/lrs-js-common/dist/warnings';

const versionHeaderValidator = rulr.maybe(rulr.required(validateVersion));
export default (headerVal?: string) => {
  versionHeaderValidator(headerVal, ['header', 'X-Experience-API-Version']);
};
