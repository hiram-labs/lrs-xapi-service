import TypeWarning from '@hiram-labs/lrs-xapi-validation/dist/warnings/TypeWarning';
import commonTranslateWarning from '@hiram-labs/lrs-js-common/dist/expressPresenter/utils/translateWarning';
import { Warning } from '@hiram-labs/lrs-js-common/dist/warnings';
import Translator from '../../translatorFactory/Translator';

export default (translator: Translator, warning: Warning) => {
  switch (warning.constructor) {
    case TypeWarning:
      return translator.xapiTypeWarning(warning as TypeWarning);
    default:
      return commonTranslateWarning(translator, warning);
  }
};
