import Member from '@hiram-labs/lrs-js-common/dist/utils/Member';
import ClientModel from '../../../models/ClientModel';

export interface Opts {
  readonly id: string;
  readonly client: ClientModel;
}

type Signature = Member<Opts, string>;

export default Signature;
