import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { DatabaseModule } from 'src/database/database.module';
import { ProductsController } from './products.controller';
import { ProductsProviders } from './products.providers';

@Module({
  imports:[DatabaseModule],
  providers: [ProductsService, ...ProductsProviders],
  controllers: [ProductsController]
})
export class ProductsModule {}
