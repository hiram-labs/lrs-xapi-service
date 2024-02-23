import Member from '@hiram-labs/lrs-js-common/dist/utils/Member';
import ClientModel from '../../../models/ClientModel';
import Statement from '../../../models/Statement';

export interface Opts {
  readonly ids: string[];
  readonly client: ClientModel;
}

type Signature = Member<Opts, Statement[]>;

export default Signature;
