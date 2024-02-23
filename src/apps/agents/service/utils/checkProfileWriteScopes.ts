import checkScopes from '@hiram-labs/lrs-js-common/dist/service/utils/checkScopes';
import { PROFILE_WRITE_SCOPES } from '../../utils/scopes';

export default (scopes: string[]) => {
  checkScopes(PROFILE_WRITE_SCOPES, scopes);
};
