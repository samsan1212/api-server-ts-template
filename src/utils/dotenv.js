import { config } from 'dotenv';
import chalk from 'chalk';

/* Run this script BEFORE any other script runs */

const { error } = config();

if (error) {
  console.error(`${chalk.green('error')} ${error.message}`);
  process.exit(1);
}

console.log(`${chalk.green('success')} environment variables loaded.`);
