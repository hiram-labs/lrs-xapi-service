import BaseError from '@hiram-labs/lrs-js-common/dist/errors/BaseError';

export default class extends BaseError {
  /* istanbul ignore next - Couldn't test without an unacceptable test duration. */
  constructor(public readonly timeoutMs: number) {
    super();
  }
}
