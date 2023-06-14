import mongoose from 'mongoose';
import app from './app';
import config from './config/index';
import colors from 'colors';
import { logger, errorLogger } from './shared/logger';
import { Server } from 'http';

let server: Server;
process.on('uncaughtException', err => {
  errorLogger.error(err);
  process.exit(1);
});

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    logger.info(colors.yellow('🛢 Database is connected'));
    server = app.listen(config.port, () => {
      logger.info(colors.blue(`App is listening on port:${config.port}`));
    });
  } catch (error) {
    errorLogger.error('Failed to connect to the database: ', error);
  }

  process.on('unhandledRejection', error => {
    if (server) {
      server.close(() => {
        errorLogger.error(error);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}

main();

process.on('SIGTERM', () => {
  logger.info('SIGTERM is received');
  if (server) {
    server.close();
  }
});
