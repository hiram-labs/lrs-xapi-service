import CommonRepo from '@hiram-labs/lrs-js-common/dist/repoFactory/Repo';
import CreateAttachmentsSignature from './createAttachments/Signature';
import GetAttachmentSignature from './getAttachment/Signature';

export default interface StorageRepo extends CommonRepo {
  readonly createAttachments: CreateAttachmentsSignature;
  readonly getAttachment: GetAttachmentSignature;
}
