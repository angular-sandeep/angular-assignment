import { Product } from "../components/productcomponent/app.product.model";
import { Injectable } from "@angular/core";

@Injectable()
export class SampleService {
  getProducts(): Array<Product> {
    let products: Array<Product>;
    products = new Array<Product>();
    products.push(new Product(101, "P1", "C1", 111));
    products.push(new Product(102, "P2", "C2", 222));
    return products;
  }
}
