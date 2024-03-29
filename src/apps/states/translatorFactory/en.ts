import commonTranslator from '@hiram-labs/lrs-js-common/dist/translatorFactory/en';
import Translator from './Translator';

const stringPath = (path: string[]) => path.join('.');

const translator: Translator = {
  expiredClientError: () => `Your organisation has expired`,
  invalidMethodError: (err) => `Method (${err.method}) is invalid for alternate request syntax`,
  jsonSyntaxError: (err) => {
    const path = stringPath(err.path);
    return `Expected valid JSON in ${path}`;
  },
  nonJsonObjectError: () => 'Expected a JSON object to be provided and stored (if it exists)',
  untrustedClientError: () => 'Your client has been disabled',
  xapiTypeWarning: (warning) => {
    const path = stringPath(warning.path);
    const dataString = JSON.stringify(warning.data);
    return `Expected ${warning.typeName} in ${path}. Received '${dataString}'`;
  },
  ...commonTranslator
};

export default translator;
