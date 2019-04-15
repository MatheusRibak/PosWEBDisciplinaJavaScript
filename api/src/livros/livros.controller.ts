import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { LivrosService } from './livros.service';
import { async } from 'rxjs/internal/scheduler/async';
import { CreateLivrosDto } from './dto/create-livros.dto';

@Controller('livros')
export class LivrosController {
    constructor(
        private readonly livrosService: LivrosService
    )
    {}
    @Get()
    async retrieve(){
        return await this.livrosService.findAll();
    }
    @Post()
    async create(@Body() livros: CreateLivrosDto){
        return await this.livrosService.create(livros);
    }

    @Get(':id') 
    async get(@Param('id') id: string){
        return await this.livrosService.findOneById(id);
    }

    @Put(':id')
    async update(@Param('id') id:string, @Body() livros: CreateLivrosDto){
        return await this.livrosService.update(id, livros);
    }

    @Delete(':id')
    async delete(@Param('id') id: string){
        return await this.livrosService.delete(id);
    }
}
