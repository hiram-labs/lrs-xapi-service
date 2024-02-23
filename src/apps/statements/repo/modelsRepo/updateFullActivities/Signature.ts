import Member from '@hiram-labs/lrs-js-common/dist/utils/Member';
import FullActivityDatabase from '../../../models/FullActivityDatabase';

export interface Opts {
  readonly fullActivities: FullActivityDatabase[];
}

type Signature = Member<Opts, void>;

export default Signature;
