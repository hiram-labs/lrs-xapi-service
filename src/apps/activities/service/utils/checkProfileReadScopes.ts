import checkScopes from '@hiram-labs/lrs-js-common/dist/service/utils/checkScopes';
import { PROFILE_READ_SCOPES } from '../../utils/scopes';

export default (scopes: string[]) => {
  checkScopes(PROFILE_READ_SCOPES, scopes);
};
