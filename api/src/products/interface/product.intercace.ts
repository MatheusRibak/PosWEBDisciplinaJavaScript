import {Document} from "mongoose";

export  interface Product  extends Document{
    name: string;
    description: string;
    price: string;
    amount: number;
    weight?: number;
}