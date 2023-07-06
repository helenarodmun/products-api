/* eslint-disable prettier/prettier */
import express from 'express';
import { HealthCheckRoute } from './routes/healthCheck.route';
import { ProductRoute } from './routes/product.route';

class App {
  public app: express.Application;
  public healthCheckRoute = new HealthCheckRoute();
  public productRoute = new ProductRoute();

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.healthCheckRoute.routes(this.app);
    this.productRoute.routes(this.app);
  }
}

export default new App().app;
