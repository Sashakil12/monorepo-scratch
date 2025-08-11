import { Injectable } from '@nestjs/common';
import { createProductRequest, Product } from '@repo/types';

@Injectable()
export class ProductsService {
  private readonly products: Product[] = [];
  createProduct(createProductRequest: createProductRequest) {
    const product: Product = {
      ...createProductRequest,
      id: Math.random().toString(36).substring(7),
    };
    this.products.push(product);
    return product;
  }
  getProducts() {
    return this.products;
  }
}
