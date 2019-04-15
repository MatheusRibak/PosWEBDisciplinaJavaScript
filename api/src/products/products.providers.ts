import { connection, Connection } from "mongoose";
import { ProductSchema } from "./schemas/product.schema";

export const ProductsProviders = [
    {
        provide: 'ProductModelToken',
        useFactory: (connection : Connection) => connection.model('Product', ProductSchema),
        inject: ['DbConnectionToken']
    }
]