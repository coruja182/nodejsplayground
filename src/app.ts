import express, { Request, Response, NextFunction } from 'express';
import indexRoutes from './routes/index-routes';

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
  }

  private config(): void {

    // for parsing application/json
    this.app.use(express.json())
    this.app.use('/', indexRoutes)
    console.log('App configured.', indexRoutes)
  }
}

export default new App().app;
