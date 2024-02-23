import checkScopes from '@hiram-labs/lrs-js-common/dist/service/utils/checkScopes';
import { STATE_WRITE_SCOPES } from '../../utils/scopes';

export default (scopes: string[]) => {
  checkScopes(STATE_WRITE_SCOPES, scopes);
};
