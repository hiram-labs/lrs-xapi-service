import matchesModel from './matchesModel';

const matcher = (registration: string) => {
  return {
    registrations: registration
  };
};

export default matchesModel<string>(matcher, (opts) => {
  return opts.registration;
});
