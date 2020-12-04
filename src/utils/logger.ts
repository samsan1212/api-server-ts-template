import chalk from 'chalk';

const isProd = process.env.NODE_ENV === 'production'

export function debug(message: string) {
  return isProd ? '' : `${chalk.grey('warn')} ${message}`;
}

export function success(message: string) {
  return isProd ? '' : `${chalk.green('success')} ${message}`;
}

export function warn(message: string) {
  return isProd ? '' : `${chalk.yellow('warn')} ${message}`;
}

export function info(message: string) {
  return isProd ? '' : `${chalk.blue('info')} ${message}`;
}

export function error(message: string) {
  return isProd ? '' : `${chalk.red('error')} ${message}`;
}

export default {
  debug,
  success,
  warn,
  info,
  error
};