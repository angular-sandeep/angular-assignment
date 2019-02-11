import { Component, OnInit } from "@angular/core";
import { Product } from "./../models/app.product.model";

@Component({
  selector: "app-pipe-component",
  template: `
    <div class="container">
      <strong>Angular Pipes</strong>
    </div>
    <br />
    <div class="container">
      <span>{{ name | uppercase }}</span
      ><br />
      <span>{{ name | lowercase }}</span
      ><br />
      <hr />
      <span>{{ dob | date: "short" }}</span
      ><br />
      <span>{{ dob | date: "medium" }}</span
      ><br />
      <span>{{ dob | date: "full" }}</span
      ><br />
      <span>{{ dob | date: "M/dd/yyyy" }}</span
      ><br />
      <span>{{ dob | date: "M/dd/yy" }}</span
      ><br />

      <hr />
      <span>{{ salary | currency: "INR":true }}</span
      ><br />
    </div>
    <div class="container">
      <span>{{ prod }}</span
      ><br />

      <span>{{ prod | json }}</span>
    </div>
    <br />
    <div class="container">
      <input type="text" [value]="name | uppercase" class="form-control" />

      <!--   
                ====> not allowed with ngModel

    <input type="text" [(ngModel)]="name | uppercase" class="form-control" /> -->
    </div>
  `
})
export class PipeComponent implements OnInit {
  name: string;
  dob: Date;
  salary: number;
  prod: Product;

  constructor() {
    this.name = "sandeep pal";
    this.dob = new Date(2010, 9, 12);
    this.salary = 12000;

    this.prod = new Product("1", 123, "mobile", "electronics", "dell", 25000);
  }

  ngOnInit(): void {}
}
