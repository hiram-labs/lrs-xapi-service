import CommonRepo from '@hiram-labs/lrs-js-common/dist/repoFactory/Repo';
import EmitNewStatementsSignature from './emitNewStatements/Signature';

export default interface Facade extends CommonRepo {
  readonly emitNewStatements: EmitNewStatementsSignature;
}
