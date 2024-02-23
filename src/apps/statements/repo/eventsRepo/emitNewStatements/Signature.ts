import Member from '@hiram-labs/lrs-js-common/dist/utils/Member';
import { StatementProcessingPriority } from '../../../enums/statementProcessingPriority.enum';

export interface Opts {
  readonly statementProperties: string[];
  readonly priority: StatementProcessingPriority;
}

type Signature = Member<Opts, void>;

export default Signature;
