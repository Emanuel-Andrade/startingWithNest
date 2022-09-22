import { Model } from 'sequelize-typescript';
export declare class ProductModel extends Model<ProductModel> {
    name: string;
    price: number;
    code: string;
}
