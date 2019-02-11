import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-main-component",
  template: `
    <table class="table table-bordered table-striped">
      <tr>
        <td><a [routerLink]="['home']">Home</a></td>
        <!-- <td><a [routerLink]="['/about/', id]">About</a></td> -->
        <td><a [routerLink]="['about']">About</a></td>
        <td><a [routerLink]="['contact']">Contact</a></td>
      </tr>
    </table>

    <hr />
    <router-outlet></router-outlet>
  `
})
export class MainComponent implements OnInit {
  message: string;
  id: number;

  constructor() {
    this.message = `Hi I am Contact Companent`;
    this.id = 1000;
  }

  ngOnInit(): void {}
}
