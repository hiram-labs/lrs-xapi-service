import Member from '@hiram-labs/lrs-js-common/dist/utils/Member';
import ClientModel from '../../../models/ClientModel';

export interface Opts {
  readonly client: ClientModel;
  readonly count: number;
}

type Signature = Member<Opts, void>;

export default Signature;
