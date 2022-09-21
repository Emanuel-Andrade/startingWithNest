import { ProductModel } from './product.model';
import { ProductService } from './product.service';
export declare class Product {
    private ProductService;
    constructor(ProductService: ProductService);
    getAll(): ProductModel[];
    getOne(params: any): ProductModel;
    create(product: ProductModel): ProductModel[];
    update(product: ProductModel, params: any): ProductModel[];
    delete(params: any): ProductModel[];
}
