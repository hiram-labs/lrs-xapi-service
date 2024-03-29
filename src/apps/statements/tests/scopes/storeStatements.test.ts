import Forbidden from '@hiram-labs/lrs-js-common/dist/errors/Forbidden';
import assertError from '@hiram-labs/lrs-js-common/dist/tests/utils/assertError';
import { difference } from 'lodash';
import { StatementProcessingPriority } from '../../enums/statementProcessingPriority.enum';
import * as scopes from '../../utils/scopes';
import allScopes from '../../utils/scopes';
import createClientModel from '../utils/createClientModel';
import setup from '../utils/setup';

const TEST_FORBIDDEN_SCOPES = difference(allScopes, scopes.STATEMENT_WRITE_SCOPES);

describe('store statements with scopes', () => {
  const service = setup();

  const testWriteScope = async (clientScopes: string[]) => {
    const client = createClientModel({ _id: 'test_client_b', scopes: clientScopes });
    await service.storeStatements({
      models: [],
      attachments: [],
      client
    });
  };

  it('should create statements when using xAPI all scope', async () => {
    await testWriteScope([scopes.XAPI_ALL]);
  });

  it('should return a statement when using xAPI write statements scope', async () => {
    await testWriteScope([scopes.XAPI_STATEMENTS_WRITE]);
  });

  it('should throw an error when using a forbidden write scope', async () => {
    const client = createClientModel({
      _id: 'test_client_b',
      scopes: TEST_FORBIDDEN_SCOPES
    });
    const promise = service.storeStatements({
      models: [],
      attachments: [],
      client
    });
    await assertError(Forbidden, promise);
  });

  it('should create statements using default configuration of priority and bypass queues', async () => {
    const client = createClientModel({
      _id: 'test_client_b',
      scopes: [scopes.XAPI_STATEMENTS_WRITE]
    });
    await service.storeStatements({
      models: [],
      attachments: [],
      client,
      priority: StatementProcessingPriority.MEDIUM,
      bypassQueues: []
    });
  });
});
