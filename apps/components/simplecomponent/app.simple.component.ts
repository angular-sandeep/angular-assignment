import { Component } from "@angular/core";

@Component({
  selector: "app-simple-component",
  template: `
    <div class="container">
      <h1>Hello {{ message }}, Welcome to Angular Application</h1>
    </div>
    <h3>{{ getFullName() }}</h3>
    <br />

    <input type="text" [value]="getFullName()" /><br />
    <a [href]="url">Dev Curry </a> <br />
    <input type="button" class="btn btn-primary" value="Click Me" (click)="print()" />

    <input type="text" class="form-control" [(ngModel)]="fullName" /><br />
    <input type="text" class="form-control" [(ngModel)]="fullName" /><br />
    <input type="text" class="form-control" [(ngModel)]="fullName" /><br />
  `
})
export class SimpleComponent {
  message: string;
  firstName: string = "Sandeep";
  lastName: string = "Pal";
  url: string;

  constructor() {
    this.message = "Sandeep Pal";
    this.url = "https://www.devcurry.com";
  }

  getFullName(): string {
    return `${this.firstName}  ${this.lastName}`;
  }

  print(): void {
    this.message = "hay...... button is clicked";
  }
}
