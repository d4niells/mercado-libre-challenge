import config from 'config';
import { SetupServer } from './server';

(() => {
  try {
    const port = config.get<number>('App.port');

    const server = new SetupServer(port);

    server.init();
    server.start();
  } catch (error) {
    console.error(`App exited with error: ${error}`);
  }
})();
