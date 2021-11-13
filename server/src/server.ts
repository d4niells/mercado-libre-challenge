import './utils/module-alias';

import express, { Application } from 'express';

export class SetupServer {
  private app: Application;

  constructor(private port: number = 5000) {
    this.app = express();
  }

  public init(): void {
    this.setupExpress();
  }

  public start(): void {
    this.app.listen(this.port, () => {
      console.info('Server listening of port: ' + this.port);
    });
  }

  private setupExpress(): void {
    this.app.use(express.json());
  }
}
