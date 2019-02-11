import { Component, OnInit } from "@angular/core";
import { Category, Categories } from "./../../models/app.category.model";
import { CommunicationService } from "./../../services/app.communication.service";
@Component({
  selector: "app-categorysender-component",
  template: `
    <div class="container">
      <h2><strong>Category List</strong></h2>

      <table class="table table-bordered table-striped">
        <thead>
          <tr>
            <td>Category Id</td>
            <td>Category Name</td>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let c of cats" (click)="getSelectedCategory(c)">
            <td>{{ c.CatId }}</td>
            <td>{{ c.CatName }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <app-productreceiver-component [CatId]='CatId'></app-productreceiver-component>
  `
})
export class CategorySenderComponent implements OnInit {
  cat: Category;
  cats = Categories;
  CatId: number;

  constructor() {
    this.cat = new Category(0, "");
  }

  ngOnInit(): void {}

  getSelectedCategory(c: Category): void {
    this.CatId = c.CatId;
  }
}