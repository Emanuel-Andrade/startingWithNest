import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ProductModel } from './product.model';
import Validation from './product.validation';

@Injectable()
export class ProductService {
  constructor(@InjectModel(ProductModel) private model: typeof ProductModel) {}
  async getAll(): Promise<ProductModel[]> {
    return this.model.findAll();
  }

  async getOne(params): Promise<ProductModel | string> {
    const response = await Validation.isIdProduct(params);
    if (!response) return 'não foram encontrados livros';
    return this.model.findByPk(params);
  }

  async create(product: ProductModel): Promise<ProductModel | string> {
    const response = Validation.isProductModel(product);
    if (response != 'true') return response;
    this.model.create(product);
    return product;
  }

  async update(product: ProductModel, params): Promise<ProductModel | string> {
    const response = Validation.isProductModel(product);
    if (response != 'true') return response;
    await this.model.update(product, { where: { id: params } });
    return this.getOne(params);
  }

  async delete(params): Promise<ProductModel[] | string> {
    const response = await Validation.isIdProduct(params);
    if (!response) return 'não foram encontrados livros';
    this.model.destroy({
      where: { id: params },
    });
    return this.getAll();
  }
}
