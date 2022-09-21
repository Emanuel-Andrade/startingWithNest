"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const common_1 = require("@nestjs/common");
const product_model_1 = require("./product.model");
let Product = class Product {
    constructor() {
        this.book = [
            new product_model_1.ProductModel('Código Limpo', 74.3, 'LIV0011'),
            new product_model_1.ProductModel('Iniciando com TDD', 24.3, 'LIV0071'),
            new product_model_1.ProductModel('A história da Intenet', 51.0, 'LIV0011'),
        ];
    }
    getAll() {
        return this.book;
    }
    getOne(params) {
        return this.book[params.id - 1];
    }
    create(product) {
        this.book.push(product);
        return this.book;
    }
    update(product, params) {
        this.book[params.id - 1] = product;
        return this.book;
    }
    delete(params) {
        return this.book.filter((item, index) => index != params.id - 1);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], Product.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", product_model_1.ProductModel)
], Product.prototype, "getOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_model_1.ProductModel]),
    __metadata("design:returntype", Array)
], Product.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_model_1.ProductModel, Object]),
    __metadata("design:returntype", Array)
], Product.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Array)
], Product.prototype, "delete", null);
Product = __decorate([
    (0, common_1.Controller)('produtos')
], Product);
exports.Product = Product;
//# sourceMappingURL=product.controller.js.map