import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { LivrosModule } from './livros/livros.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    ProductsModule,
    LivrosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
//teste