import express, { Request, Response, NextFunction } from 'express';
import router from './router';

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
  }

  private config(): void {
    this.app.use('/', router);
    console.log('App configured.', router)
  }
}

export default new App().app;
