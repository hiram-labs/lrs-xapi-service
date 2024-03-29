import { createRequiredWarning, Warnings } from '@hiram-labs/lrs-js-common/dist/warnings';
import { jsonContentType } from '../../utils/constants';
import { jsonContentTypePattern } from '../../utils/contentTypePatterns';

export default (contentTypeHeader: string | undefined) => {
  /* istanbul ignore next - superagent always sends a content type */
  if (contentTypeHeader === undefined) {
    const warnings = [createRequiredWarning(contentTypeHeader, ['headers', 'Content-Type'])];
    throw new Warnings({}, ['headers'], warnings);
  }

  if (jsonContentTypePattern.test(contentTypeHeader)) {
    return jsonContentType;
  }

  return contentTypeHeader;
};
