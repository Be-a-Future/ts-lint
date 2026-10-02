import config from './eslint.config.mjs';

export default {
  ...config[6].rules['prettier/prettier'][1],
};
