import { createRequiredWarning, Warnings } from '@hiram-labs/lrs-js-common/dist/warnings';
import Agent from '../../models/Agent';
import parseJson from '../../utils/parseJson';

const PATH = ['query', 'agent'];

export default (agentParam: string | undefined): Agent => {
  if (agentParam === undefined) {
    const warnings = [createRequiredWarning(agentParam, PATH)];
    throw new Warnings({}, ['query'], warnings);
  }

  return parseJson(agentParam, PATH) as Agent;
};
