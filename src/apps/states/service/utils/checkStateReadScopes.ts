import checkScopes from '@hiram-labs/lrs-js-common/dist/service/utils/checkScopes';
import { STATE_READ_SCOPES } from '../../utils/scopes';

export default (scopes: string[]) => {
  checkScopes(STATE_READ_SCOPES, scopes);
};
