/* eslint-disable prettier/prettier */
import { ProductController } from '../controllers/product/product.controller';
import * as express from 'express';
import { LoggerMiddleware } from '../middlewares/logger.middleware';
export class ProductRoute {
  private readonly productController: ProductController;

  constructor() {
    this.productController = new ProductController();
  }

  public routes(app: express.Application): void {
    app
      .route('/products')
      .get(LoggerMiddleware.logRequest, this.productController.getAllProducts);
    app
      .route('/products')
      .post(LoggerMiddleware.logRequest, this.productController.createProduct);
    app
      .route('/products/:id')
      .get(LoggerMiddleware.logRequest, this.productController.findProductById);
    app
      .route('/products/:id')
      .put(
        LoggerMiddleware.logRequest,
        this.productController.updateProductById,
      );
    app
      .route('/products/:id')
      .delete(
        LoggerMiddleware.logRequest,
        this.productController.deleteProductById,
      );
  }
}
