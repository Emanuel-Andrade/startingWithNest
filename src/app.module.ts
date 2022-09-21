import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Product } from './product.controller';

@Module({
  imports: [],
  controllers: [AppController, Product],
  providers: [AppService],
})
export class AppModule {}
