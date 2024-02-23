import fakeTracker from '@hiram-labs/lrs-js-common/dist/tracker/fake';
import Tracker from '@hiram-labs/lrs-js-common/dist/tracker/Tracker';

/* istanbul ignore next */
const trackerFactory = async (): Promise<Tracker> => {
  return fakeTracker;
};

export default trackerFactory();
