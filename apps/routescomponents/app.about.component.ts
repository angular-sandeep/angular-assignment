import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-about-component",
  template: `
    <h2>About Component</h2>
    <div class="container">{{ message }}</div>
    <br />
    <div class="container">The value is: {{ value }}</div>
    <br />
    <input
      type="button"
      class="btn btn-primary"
      value="Navigate to Contact"
      (click)="navigateToContact()"
    />
  `
})
export class AboutComponent implements OnInit {
  message: string;
  value: number;

  // injection of Router and ActivatedRoute will fetch Router object form RouterModule imported in NgModule using "routing"
  constructor(private _router: Router, private _act: ActivatedRoute) {
    this.message = `Hi I am About Compenent`;
  }

  // subscribe services for activated route
  ngOnInit(): void {
      this._act.params.subscribe( (parms) => {
          this.value = parms.id;
      });
  }

  // explicitely routed to contact
  navigateToContact(): void {
    this._router.navigate(["contact"]);
  }
}
