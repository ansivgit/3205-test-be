import * as dotenv from 'dotenv';

dotenv.config();

const DEFAULT_CONFIG = {
  HOST: process.env.DEV_HOST || 'localhost',
  PORT: process.env.DEV_PORT || '8080',
};

const USERS_CONFIG = {
  ...DEFAULT_CONFIG,
  PATH: '/',
};

export {
  DEFAULT_CONFIG, USERS_CONFIG,
};
