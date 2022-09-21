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

@Controller('produtos')
export class Product {
  book: ProductModel[] = [
    new ProductModel('Código Limpo', 74.3, 'LIV0011'),
    new ProductModel('Iniciando com TDD', 24.3, 'LIV0071'),
    new ProductModel('A história da Intenet', 51.0, 'LIV0011'),
  ];
  @Get()
  getAll(): ProductModel[] {
    return this.book;
  }

  @Get(':id')
  getOne(@Param() params): ProductModel {
    return this.book[params.id - 1];
  }

  @Post()
  create(@Body() product: ProductModel): ProductModel[] {
    this.book.push(product);
    return this.book;
  }

  @Put(':id')
  update(@Body() product: ProductModel, @Param() params): ProductModel[] {
    this.book[params.id - 1] = product;
    return this.book;
  }

  @Delete(':id')
  delete(@Param() params): ProductModel[] {
    return this.book.filter((item, index) => index != params.id - 1);
  }
}
