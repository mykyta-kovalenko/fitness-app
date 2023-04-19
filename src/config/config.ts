import * as dotenv from 'dotenv';

dotenv.config();

if (!process.env.PORT) {
  //TODO: Remove in production and add error handling
  console.log('PORT is not defined in .env file');
  process.exit(1);
}

export const config = {
  port: process.env.PORT,
};
