import { ProductModel } from './product.model';
export declare class Product {
    book: ProductModel[];
    getAll(): ProductModel[];
    getOne(params: any): ProductModel;
    create(product: ProductModel): ProductModel[];
    update(product: ProductModel, params: any): ProductModel[];
    delete(params: any): ProductModel[];
}
