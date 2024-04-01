import BaseError from '@hiram-labs/lrs-js-common/dist/errors/BaseError';

export default class extends BaseError {
  constructor(public readonly voidedStatementIds: string[]) {
    super();
  }
}
