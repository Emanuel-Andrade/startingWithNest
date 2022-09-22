import { ProductModel } from './product.model';
import { ProductService } from './product.service';
export declare class Product {
    private ProductService;
    constructor(ProductService: ProductService);
    getAll(): Promise<ProductModel[]>;
    getOne(params: any): Promise<ProductModel | string>;
    create(product: ProductModel): Promise<ProductModel | string>;
    update(product: ProductModel, params: any): Promise<ProductModel | string>;
    delete(params: any): Promise<ProductModel[] | string>;
}
