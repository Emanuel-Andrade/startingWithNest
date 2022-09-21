import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Product } from './product.controller';
import { ProductService } from './product.service';

@Module({
  imports: [],
  controllers: [AppController, Product],
  providers: [AppService, ProductService],
})
export class AppModule {}
