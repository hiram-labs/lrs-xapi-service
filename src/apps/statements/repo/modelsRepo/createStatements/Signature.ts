import Member from '@hiram-labs/lrs-js-common/dist/utils/Member';
import UnstoredStatementModel from '../../../models/UnstoredStatementModel';

export interface Opts {
  readonly models: UnstoredStatementModel[];
}

type Signature = Member<Opts, UnstoredStatementModel[]>;

export default Signature;
