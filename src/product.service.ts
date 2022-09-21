import { Injectable } from '@nestjs/common';
import { ProductModel } from './product.model';

@Injectable()
export class ProductService {
  book: ProductModel[] = [
    new ProductModel('Código Limpo', 74.3, 'LIV0011'),
    new ProductModel('Iniciando com TDD', 24.3, 'LIV0071'),
    new ProductModel('A história da Intenet', 51.0, 'LIV0011'),
  ];

  getAll(): ProductModel[] {
    return this.book;
  }

  getOne(params): ProductModel {
    return this.book[params.id - 1];
  }

  create(product: ProductModel): ProductModel[] {
    this.book.push(product);
    return this.book;
  }

  update(product: ProductModel, params): ProductModel[] {
    this.book[params.id - 1] = product;
    return this.book;
  }

  delete(params): ProductModel[] {
    return this.book.filter((item, index) => index != params.id - 1);
  }
}
