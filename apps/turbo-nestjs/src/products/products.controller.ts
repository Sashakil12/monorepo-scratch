import { Body, Controller, Get, Post } from '@nestjs/common';
import { createProductRequest } from '@repo/types';
import { ProductsService } from './products.service';
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  createProduct(@Body() createProductRequest: createProductRequest) {
    return this.productsService.createProduct(createProductRequest);
  }

  @Get()
  getProducts() {
    return this.productsService.getProducts();
  }
}
