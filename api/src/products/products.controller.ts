import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { async } from 'rxjs/internal/scheduler/async';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')
export class ProductsController {
    constructor(
        private readonly productsService: ProductsService
    )
    {}
    @Get()
    async retrieve(){
        return await this.productsService.findAll();
    }
    @Post()
    async create(@Body() product: CreateProductDto){
        return await this.productsService.create(product);
    }

    @Get(':id') 
    async get(@Param('id') id: string){
        return await this.productsService.findOneById(id);
    }

    @Put(':id')
    async update(@Param('id') id:string, @Body() product: CreateProductDto){
        return await this.productsService.update(id, product);
    }

    @Delete(':id')
    async delete(@Param('id') id: string){
        return await this.productsService.delete(id);
    }
}
