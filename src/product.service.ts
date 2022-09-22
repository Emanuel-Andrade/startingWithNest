import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ProductModel } from './product.model';

@Injectable()
export class ProductService {
  constructor(@InjectModel(ProductModel) private model: typeof ProductModel) {}
  async getAll(): Promise<ProductModel[]> {
    return this.model.findAll();
  }

  async getOne(params): Promise<ProductModel> {
    return this.model.findByPk(params);
  }

  async create(product: ProductModel): Promise<ProductModel | string> {
    if (typeof product !== typeof ProductModel) return 'body errado!';
    this.model.create(product);
    return product;
  }

  async update(product: ProductModel, params): Promise<ProductModel | string> {
    console.log(typeof product);
    console.log(typeof ProductModel);
    if (typeof product !== typeof ProductModel) return 'body errado!';
    await this.model.update(product, { where: params });
    return this.getOne(params);
  }

  async delete(params): Promise<ProductModel[]> {
    this.model.destroy({
      where: params,
    });
    return this.getAll();
  }
}
