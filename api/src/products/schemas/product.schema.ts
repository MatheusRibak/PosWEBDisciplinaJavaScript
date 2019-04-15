import * as Mongoose  from "mongoose";

export const ProductSchema = new Mongoose.Schema({
    name: String,
    description: String,
    price: {
        type: Number,
        default: 0
    },
    amount:{
        type: Number,
        default: 1
    },
    weight:{
        type: Number,
        default:0
    }

});