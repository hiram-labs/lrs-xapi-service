import commonFsRepo from '@hiram-labs/lrs-js-common/dist/fsRepo';
import StorageRepo from '../repoFactory/StorageRepo';
import Config from './Config';
import deleteProfileContent from './deleteProfileContent';
import getProfileContent from './getProfileContent';
import storeProfileContent from './storeProfileContent';

export default (config: Config): StorageRepo => {
  return {
    deleteProfileContent: deleteProfileContent(config),
    getProfileContent: getProfileContent(config),
    storeProfileContent: storeProfileContent(config),
    ...commonFsRepo(config)
  };
};
