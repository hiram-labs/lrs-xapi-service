import Member from '@hiram-labs/lrs-js-common/dist/utils/Member';
import ClientModel from '../../../models/ClientModel';
import StatementHash from '../../../models/StatementHash';

export interface Opts {
  readonly ids: string[];
  readonly client: ClientModel;
}

type Signature = Member<Opts, StatementHash[]>;

export default Signature;
