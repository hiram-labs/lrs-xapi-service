import Tracker from '@hiram-labs/lrs-js-common/dist/tracker/Tracker';
import { Logger } from 'winston';
import Repo from '../repo/Repo';

interface Config {
  readonly repo: Repo;
  readonly tracker: Promise<Tracker>;
  readonly logger: Logger;
  readonly enableConflictChecks: boolean;
  readonly enableAttachmentValidation: boolean;
  readonly enableVoidingChecks: boolean;
  readonly enableStatementCreation: boolean;
  readonly enableAttachmentCreation: boolean;
  readonly enableVoiding: boolean;
  readonly enableReferencing: boolean;
  readonly awaitUpdates: boolean;
  readonly enableActivityUpdates: boolean;
  readonly enableNullRemoval: boolean;
  readonly enableActorLowerCasing: boolean;
}

export default Config;
