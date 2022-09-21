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
const product_service_1 = require("./product.service");
let Product = class Product {
    constructor(ProductService) {
        this.ProductService = ProductService;
    }
    getAll() {
        return this.ProductService.getAll();
    }
    getOne(params) {
        return this.ProductService.getOne(params.id);
    }
    create(product) {
        return this.ProductService.create(product);
    }
    update(product, params) {
        return this.ProductService.update(product, params.id);
    }
    delete(params) {
        return this.ProductService.delete(params.id);
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
    (0, common_1.Controller)('produtos'),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], Product);
exports.Product = Product;
//# sourceMappingURL=product.controller.js.map