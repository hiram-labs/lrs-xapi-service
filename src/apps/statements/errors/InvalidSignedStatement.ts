import BaseError from '@hiram-labs/lrs-js-common/dist/errors/BaseError';
import Statement from '../models/Statement';

export default class extends BaseError {
  constructor(
    public readonly originalStatement: Statement,
    public readonly decodedStatement: unknown
  ) {
    super();
  }
}
