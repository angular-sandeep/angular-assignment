import { Component, OnInit, Input, Output } from "@angular/core";
import { Product, Products } from "./../../models/app.productcatg.model";
import { CommunicationService } from "./../../services/app.communication.service";
import { EventEmitter } from "events";
// 2.
@Component({
  selector: "app-productreceiver-component",
  template: `
    <div class="container">
      <h2>
        <strong> Products List for Category:{{ _CatId }} </strong>
      </h2>
      <input
        type="search"
        class="form-control"
        placeholder="Search...."
      /><br />
      <table class="table table-bordered table-striped">
        <thead>
          <tr>
            <td>Product Id</td>
            <td>Product Name</td>
            <td>Category Id</td>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let p of filterProducts">
            <td>{{ p.ProdId }}</td>
            <td>{{ p.ProdName }}</td>
            <td>{{ p.CatId }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `
})
export class ProductReceiverComponent implements OnInit {
  // @output property
  @Output() productCount = new EventEmitter();
  count: number;


  prd: Product;
  prds = Products;
  _CatId: number;

  private _FilterProducts: Array<Product>;

  constructor() {
    this._FilterProducts = new Array<Product>();
  }

  ngOnInit() {}

  /* @input started*/
  @Input()
  set CatId(CatId: number) {
    this._CatId = CatId;
  }
  get CatId() {
    return this._CatId;
  }
  /* @input ended*/

  
  get filterProducts() {
    this._FilterProducts = new Array<Product>();
    for (let e of this.prds) {
      if (e.CatId == this._CatId) {
        this._FilterProducts.push(e);
        this.count++;
      }
    }
    this.productCount.emit(this.count+'');
    return this._FilterProducts;
  }
}
