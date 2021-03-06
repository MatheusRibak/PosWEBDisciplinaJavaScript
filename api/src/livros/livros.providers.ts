import { connection, Connection } from "mongoose";
import { LivrosSchema } from "./schemas/livros.schema";

export const LivrosProviders = [
    {
        provide: 'LivrosModelToken',
        useFactory: (connection : Connection) => connection.model('BancoLivrosMatheus', LivrosSchema),
        inject: ['DbConnectionToken']
    }
]