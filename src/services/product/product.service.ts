import { v4 as uuidv4 } from 'uuid';
import { Product } from '../../models/product';
import { GeneralException } from '../../exceptions/generalException';

export class ProductService {
  private products: Product[];

  constructor() {
    this.products = [];
  }

  createProduct(product: Product): Product {
    product.id = uuidv4();
    this.products.push(product);
    return this.findProductById(product.id);
  }

  getAllProducts(): Array<Product> {
    return this.products;
  }

  findProductById(id: string): Product {
    const productFound = this.products.filter((product) => product.id === id);
    if (productFound[0]) {
      return productFound[0];
    } else {
      throw new GeneralException('Product not found', 404);
    }
  }

  updateProductById(id: string, product: Product): Product {
    let productForUpdate = this.findProductById(id);
    productForUpdate = { ...productForUpdate, ...product };
    this.products = this.products.map(
      (product) => (product.id === id && productForUpdate) || product,
    );
    return this.findProductById(id);
  }

  deleteProductById(id: string): Array<Product> {
    const productForUpdate = this.findProductById(id);
    this.products = this.products.filter(
      (product) => product.id !== productForUpdate.id,
    );
    return this.products;
  }
}
