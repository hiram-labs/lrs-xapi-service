import { statement as validateStatement } from '@hiram-labs/lrs-xapi-validation/dist/factory';
import * as rulr from '@hiram-labs/lrs-js-common/dist/warnings';

const validateStatements = rulr.maybe(rulr.restrictToCollection(() => validateStatement));

export default (models: any[]) => {
  validateStatements(models, ['statements']);
};
