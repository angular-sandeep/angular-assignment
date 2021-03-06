import { Product } from "./../../models/app.product.model";

export class ProductLogic {
    private products: Array<Product>;

    constructor(){
        this.products = this.products;
    }

    getProducts(): Array<Product> {
        return this.products;
    }

    saveProduct(p:Product): Array<Product> {
        this.products.push(p);
        return this.products;
    }

    deleteProduct(i: number) : Array<Product> {
        this.products.splice(i,1);
        return this.products;
    }
}
