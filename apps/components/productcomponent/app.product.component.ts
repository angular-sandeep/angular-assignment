import { Component, OnInit } from "@angular/core";
import { Product, Products, Categories } from "./app.product.model";
import { ProductLogic } from "./app.product.logic";

@Component({
  selector: "app-product-component",
  templateUrl: "./app.product.view.html"
})
export class ProductComponent implements OnInit {
  product: Product;
  private logic: ProductLogic;
  products: Array<Product>;

  categories = Categories;

  tableHeaders: Array<string>;

  constructor() {
    this.product = new Product(0, "", "", 0);
    this.logic = new ProductLogic();
    this.products = new Array<Product>();
    this.tableHeaders = new Array<string>();
  }

  // invoke just after constructor automatically
  ngOnInit(): void {
    this.products = this.logic.getProducts();

    // read all properties of Product class and push them into tablehearder array
    for (let p in this.product) {
      this.tableHeaders.push(p);
    }
  }

  clear(): void {
    this.product = new Product(0, "", "", 0);
  }

  save(): void {
    this.products = this.logic.saveProduct(this.product);
    //alert(JSON.stringify(this.products));
  }

  getSelectedrow(p: Product): void {
    // 1. create a deep copy of the selected product
    // 2. assign that copy to this.product
    this.product = Object.assign({}, p);
  }

  delete(i: number): void {
    this.products = this.logic.deleteProduct(i);
  }
}
