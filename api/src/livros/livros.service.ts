import { Injectable, Inject } from '@nestjs/common';
import { CreateLivrosDto } from './dto/create-livros.dto';
import { Livros } from './interface/livros.intercace';
import { Model } from 'mongoose';

@Injectable()
export class LivrosService {
    constructor(
        @Inject('LivrosModelToken') private readonly livrosModel: Model<Livros>
    ){}
    async create(livros: CreateLivrosDto) : Promise<Livros>{
        const CreateLivrosDto = new this.livrosModel(livros);
        return await CreateLivrosDto.save();
    }

    async findAll(): Promise<Livros[]>{
        return await this.livrosModel.find().exec();
    }

    async findOneById(id: string) : Promise<Livros> {  
        return await this.livrosModel.findById(id).exec();
    }

    async update(id: string, livros: CreateLivrosDto): Promise<Livros>{
        return await this.livrosModel.findByIdAndUpdate(id, livros);
    }

    async delete(id: string): Promise<Livros>{
        return await this.livrosModel.findByIdAndDelete(id);
    }

}

