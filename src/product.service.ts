import { Injectable } from '@nestjs/common';
import { ProductModel } from './product.model';

@Injectable()
export class ProductService {
  book: ProductModel[] = [];

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
