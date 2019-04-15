import { Module } from '@nestjs/common';
import { LivrosService } from './livros.service';
import { DatabaseModule } from 'src/database/database.module';
import { LivrosController } from './livros.controller';
import { LivrosProviders } from './livros.providers';

@Module({
  imports:[DatabaseModule],
  providers: [LivrosService, ...LivrosProviders],
  controllers: [LivrosController]
})
export class LivrosModule {}
