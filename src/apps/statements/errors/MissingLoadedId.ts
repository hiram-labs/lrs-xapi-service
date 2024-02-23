import BaseError from '@hiram-labs/lrs-js-common/dist/errors/BaseError';

/* istanbul ignore next */
export default class extends BaseError {
  constructor(public readonly targetId: string) {
    super();
  }
}
