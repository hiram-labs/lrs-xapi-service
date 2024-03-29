import { stringToStream } from '../../../../utils/stringToStream';
import AttachmentModel from '../../models/AttachmentModel';
import createSha from './createSha';

export default (content: string, contentType = 'text/plain'): AttachmentModel => {
  return {
    stream: stringToStream(content),
    hash: createSha(content),
    contentType,
    contentLength: content.length
  };
};
