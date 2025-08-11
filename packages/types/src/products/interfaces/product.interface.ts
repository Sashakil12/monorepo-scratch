import { createProductRequest } from "../dto/create-product.request";

export interface Product extends createProductRequest{
    id: string;
    

}