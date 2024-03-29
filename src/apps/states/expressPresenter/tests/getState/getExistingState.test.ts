import { StatusCodes } from 'http-status-codes';
import createJsonState from '../../../utils/createJsonState';
import createTextState from '../../../utils/createTextState';
import {
  TEST_ACCOUNT_AGENT,
  TEST_CONTENT,
  TEST_JSON_CONTENT,
  TEST_MBOX_AGENT,
  TEST_MBOXSHA1_AGENT,
  TEST_OPENID_AGENT
} from '../../../utils/testValues';
import setup from '../utils/setup';
import getState from './utils/getState';

describe('expressPresenter.getState with existing state', () => {
  setup();

  it('should 400 without version header', async () => {
    await createTextState();
    await getState({}, false).expect(StatusCodes.BAD_REQUEST);
  });

  it('should get when getting text', async () => {
    await createTextState();
    await getState().expect(StatusCodes.OK, TEST_CONTENT);
  });

  it('should get when agent properties are in a different order', async () => {
    const creationAgent = {
      objectType: 'Agent',
      account: {
        name: 'steely.eyed',
        homePage: 'http://missile.man'
      }
    };
    const retrievalAgent = JSON.stringify({
      objectType: 'Agent',
      account: {
        homePage: 'http://missile.man',
        name: 'steely.eyed'
      }
    });
    await createTextState({ agent: creationAgent });
    await getState({ agent: retrievalAgent }).expect(StatusCodes.OK, TEST_CONTENT);
  });

  it('should get when not using registration', async () => {
    await createTextState();
    await getState({ registration: undefined }).expect(StatusCodes.OK, TEST_CONTENT);
  });

  it('should get when getting json', async () => {
    await createJsonState();
    await getState().expect(StatusCodes.OK, JSON.parse(TEST_JSON_CONTENT));
  });

  it('should error when getting existing model without a registration with one', async () => {
    await createTextState({ registration: undefined });
    await getState().expect(StatusCodes.NOT_FOUND);
  });

  it('should get when not using mbox', async () => {
    await createTextState({ agent: TEST_MBOX_AGENT });
    await getState({ agent: JSON.stringify(TEST_MBOX_AGENT) }).expect(StatusCodes.OK, TEST_CONTENT);
  });

  it('should get when not using mbox_sha1sum', async () => {
    await createTextState({ agent: TEST_MBOXSHA1_AGENT });
    await getState({ agent: JSON.stringify(TEST_MBOXSHA1_AGENT) }).expect(StatusCodes.OK, TEST_CONTENT);
  });

  it('should get when not using openid', async () => {
    await createTextState({ agent: TEST_OPENID_AGENT });
    await getState({ agent: JSON.stringify(TEST_OPENID_AGENT) }).expect(StatusCodes.OK, TEST_CONTENT);
  });

  it('should get when not using account', async () => {
    await createTextState({ agent: TEST_ACCOUNT_AGENT });
    await getState({ agent: JSON.stringify(TEST_ACCOUNT_AGENT) }).expect(StatusCodes.OK, TEST_CONTENT);
  });
});
