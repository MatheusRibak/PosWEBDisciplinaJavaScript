import { Injectable, Inject } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './interface/product.intercace';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
    constructor(
        @Inject('ProductModelToken') private readonly productModel: Model<Product>
    ){}
    async create(product: CreateProductDto) : Promise<Product>{
        const CreateProductDto = new this.productModel(product);
        return await CreateProductDto.save();
    }

    async findAll(): Promise<Product[]>{
        return await this.productModel.find().exec();
    }

    async findOneById(id: string) : Promise<Product> {  
        return await this.productModel.findById(id).exec();
    }

    async update(id: string, product: CreateProductDto): Promise<Product>{
        return await this.productModel.findByIdAndUpdate(id, product);
    }

    async delete(id: string): Promise<Product>{
        return await this.productModel.findByIdAndDelete(id);
    }

}

