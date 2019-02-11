import { Component, OnInit } from "@angular/core";
import { Categories } from "./app.product.model";
import { ProductService } from "./../../services/app.products.service";
import { Product } from "./../../models/app.product.model";
import { Response } from "@angular/http";

@Component({
  selector: "app-productservice-component",
  templateUrl: "./app.product.view.html",
  styles: [
    `
      .table-striped tbody tr:hover {
        background: #a7a7a7;
        font-weight : bold;
      }
      input[type="button"] {
        margin-left: 10px;
        padding: 5px 20px;
      }
    `
  ]
})
export class ProductServiceComponent implements OnInit {
  product: Product;
  products: Array<Product>;

  // to show/hide edit button
  edit: boolean;

  // to enable/disable product id field
  productIdEnable: boolean;

  // current selected row index from table
  index: number;

  // category locally
  categories = Categories;

  // to set table header
  tableHeaders: Array<string>;

  constructor(private serv: ProductService) {
    this.product = new Product("", 0, "", "", "", 0);
    this.products = new Array<Product>();
    this.tableHeaders = new Array<string>();
    this.edit = true;
    this.productIdEnable = false;
  }

  // invoke just after constructor automatically
  ngOnInit(): void {
    for (let p in this.product) {
      this.tableHeaders.push(p);
    }

    // make call to REST API and get Data
    this.serv.getData().subscribe(
      (resp: Response) => {
        this.products = resp.json().data;
        console.log(this.products);
      },
      error => {
        console.log(`Error occurred :==>> ${error}`);
      }
    );
  }

  // to add new product data
  save(): void {
    // make call to REST API and post Data
    this.serv.postData(this.product).subscribe(
      (resp: Response) => {
        this.products.push(resp.json().data);
      },
      error => {
        console.log(`Error occurred :==>> ${error}`);
      }
    );
  }

  // to update product data
  update(): void {
    let prd = {
      _id: this.product._id,
      ProductId: this.product.ProductId,
      ProductName: this.product.ProductName,
      CategoryName: this.product.CategoryName,
      Manufacturer: this.product.Manufacturer,
      Price: this.product.Price
    };

    // make call to REST API and update Data
    this.serv.putData(this.product.ProductId, this.product).subscribe(
      (resp: Response) => {
        this.products[this.index] = prd;
      },
      error => {
        console.log(`Error occurred :==>> ${error}`);
      }
    );
    this.clear();
  }

  // to delete product data
  delete(p: Product, index: number): void {
    let prod = Object.assign({}, p);

    // make call to REST API and delete Data
    this.serv.deleteData(prod.ProductId).subscribe(
      (resp: Response) => {
        this.products.splice(this.index, 1);
      },
      error => {
        console.log(`Error occurred :==>> ${error}`);
      }
    );
    this.clear();
  }

  // to select product data
  getSelectedrow(p: Product, i: number): void {
    // 1. create a deep copy of the selected product
    // 2. assign that copy to this.product
    this.product = Object.assign({}, p);
    this.edit = false;
    this.productIdEnable = true;
    this.index = i;
  }

  // to clear form fields
  clear(): void {
    this.edit = true;
    this.productIdEnable = false;
    this.product = new Product("", 0, "", "", "", 0);
  }
}
