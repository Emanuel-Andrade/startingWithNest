"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const product_controller_1 = require("./product.controller");
const product_service_1 = require("./product.service");
const ts_dotenv_1 = require("ts-dotenv");
const product_model_1 = require("./product.model");
const env = (0, ts_dotenv_1.load)({
    DATABASE_USERNAME: String,
    DATABASE_PASSWORD: String,
    DATABASE_DATABASE: String,
});
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            sequelize_1.SequelizeModule.forRoot({
                dialect: 'mysql',
                host: '127.0.0.1',
                port: 3306,
                username: env.DATABASE_USERNAME,
                password: env.DATABASE_PASSWORD,
                database: env.DATABASE_DATABASE,
                autoLoadModels: true,
                synchronize: true,
            }),
            sequelize_1.SequelizeModule.forFeature([product_model_1.ProductModel]),
        ],
        controllers: [app_controller_1.AppController, product_controller_1.Product],
        providers: [app_service_1.AppService, product_service_1.ProductService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map