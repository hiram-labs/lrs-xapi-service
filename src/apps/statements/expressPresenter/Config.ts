import CommonExpressConfig from '@hiram-labs/lrs-js-common/dist/expressPresenter/Config';
import Tracker from '@hiram-labs/lrs-js-common/dist/tracker/Tracker';
import Service from '../serviceFactory/Service';
import Translator from '../translatorFactory/Translator';

interface Config extends CommonExpressConfig {
  readonly llClientInfoEndpoint: string;
  readonly service: Service;
  readonly translator: Translator;
  readonly tracker: Promise<Tracker>;
  readonly allowUndefinedMethod: boolean;
  readonly allowFormBody: boolean;
}

export default Config;
