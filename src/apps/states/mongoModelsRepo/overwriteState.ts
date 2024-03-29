import { isPlainObject } from 'lodash';
import { ReturnDocument } from 'mongodb';
import OverwriteStateOptions from '../repoFactory/options/OverwriteStateOptions';
import OverwriteStateResult from '../repoFactory/results/OverwriteStateResult';
import Config from './Config';
import { COLLECTION_NAME } from './utils/constants';
import getStateFilter from './utils/getStateFilter';

export default (config: Config) => {
  return async (opts: OverwriteStateOptions): Promise<OverwriteStateResult> => {
    const collection = (await config.db()).collection(COLLECTION_NAME);
    const stateFilter = getStateFilter(opts);

    const update = {
      content: opts.content,
      contentType: opts.contentType,
      etag: opts.etag,
      extension: opts.extension,
      isObjectContent: isPlainObject(opts.content),
      updatedAt: new Date()
    };

    // Creates the state if it doesn't already exist.
    // Docs: http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html#findOneAndUpdate
    // Docs: http://bit.ly/findAndModifyWriteOpResult
    const createOpResult = await collection.findOneAndUpdate(
      stateFilter,
      {
        $set: update
      },
      {
        returnDocument: ReturnDocument.AFTER, // Ensures the updated document is returned.
        upsert: true, // Creates the state when it's not found.
        includeResultMetadata: true
      }
    );

    const id = createOpResult.lastErrorObject?.upserted || createOpResult.value?._id;
    const opResult = await collection.findOne({ _id: id });

    return {
      extension: opResult?.extension,
      id: opResult?._id.toString() as string
    };
  };
};
