import { Component } from "@angular/core";

@Component({
  selector: "app-calculator-component",
  template: `
    <div class="container">
      <input type="text" class="form-control" [(ngModel)]="a" /><br />
      <input type="text" class="form-control" [(ngModel)]="b" /><br />
      <input type="button" class="btn btn-primary" (click)="add()" value="Add"/>
      <input type="button" class="btn btn-success" (click)="sub()" value="Substarct"/>
      <input type="button" class="btn btn-danger" (click)="mult()" value="Multiply"/>
      <input type="button" class="btn btn-warning" (click)="div()" value="Division"/><br /><br/><hr/>
      Result : {{ result }}
    </div>
  `
})
export class CalculatorComponent {
  a: string;
  b: string;
  result: number;

  add(): void {
    this.result = parseInt(this.a) + parseInt(this.b);
  }

  sub(): void {
    this.result = parseInt(this.a) - parseInt(this.b);
  }
  mult(): void {
    this.result = parseInt(this.a) * parseInt(this.b);
  }
  div(): void {
    this.result = parseInt(this.a) / parseInt(this.b);
  }
}
