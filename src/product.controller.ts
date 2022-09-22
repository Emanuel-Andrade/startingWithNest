import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { ProductModel } from './product.model';
import { ProductService } from './product.service';

@Controller('produtos')
export class Product {
  constructor(private ProductService: ProductService) {}

  @Get()
  getAll(): Promise<ProductModel[]> {
    return this.ProductService.getAll();
  }

  @Get(':id')
  getOne(@Param() params): Promise<ProductModel | string> {
    return this.ProductService.getOne(params.id);
  }

  @Post()
  create(@Body() product: ProductModel): Promise<ProductModel | string> {
    return this.ProductService.create(product);
  }

  @Put(':id')
  update(
    @Body() product: ProductModel,
    @Param() params,
  ): Promise<ProductModel | string> {
    return this.ProductService.update(product, params.id);
  }

  @Delete(':id')
  delete(@Param() params): Promise<ProductModel[] | string> {
    return this.ProductService.delete(params.id);
  }
}
