import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Product } from './product.controller';
import { ProductService } from './product.service';
import env from 'dotenv';
env.config();

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_DATABASE,
      models: [],
    }),
  ],
  controllers: [AppController, Product],
  providers: [AppService, ProductService],
})
export class AppModule {}
