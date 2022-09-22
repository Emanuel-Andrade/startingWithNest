import { InjectModel } from '@nestjs/sequelize';
import { ProductModel } from './product.model';

class Validation {
  constructor(@InjectModel(ProductModel) private model: typeof ProductModel) {}

  isProductModel(product: ProductModel): string {
    if (typeof product.name != 'string') return 'Campo nome é obrigatório';
    if (typeof product.code != 'string') return 'Campo código é obrigatório';
    if (typeof product.price != 'string' && typeof product.price != 'number')
      return 'Campo preço é obrigatório';
    return 'true';
  }

  async isIdProduct(id): Promise<boolean> {
    const response = await this.model.findByPk(id);
    if (response === null) return false;
    return true;
  }
}

export default new Validation(ProductModel);
