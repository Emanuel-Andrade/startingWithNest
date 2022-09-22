import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Product } from './product.controller';
import { ProductService } from './product.service';
import { load } from 'ts-dotenv';
import { ProductModel } from './product.model';

const env = load({
  DATABASE_USERNAME: String,
  DATABASE_PASSWORD: String,
  DATABASE_DATABASE: String,
});

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: env.DATABASE_USERNAME,
      password: env.DATABASE_PASSWORD,
      database: env.DATABASE_DATABASE,
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([ProductModel]),
  ],
  controllers: [AppController, Product],
  providers: [AppService, ProductService],
})
export class AppModule {}
