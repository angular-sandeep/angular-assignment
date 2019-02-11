import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./app.home.component";
import { AboutComponent } from "./app.about.component";
import { ContactComponent } from "./app.contact.component";
import { ModuleWithProviders } from "@angular/core";
import { AppGuardService } from "../services/app.test.guard.service";
import { ErrorComponent } from "./app.error.component";
import { ProductComponent } from "../components/productcomponent/app.product.component";

// define route table
const routes: Routes = [
  { path: "home", component: HomeComponent },
  //{ path: "about/:id", component: AboutComponent },
  { path: "about", component: AboutComponent },
  {
    path: "contact",
    component: ContactComponent,
    canActivate: [AppGuardService],
    children: [
      {
        path: "product",
        component: ProductComponent
      }
    ]
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  { path: "error", component: ErrorComponent }
];

// register the RouteTable for Root of the current NgAPP
// when routing is provided to "imports" of NgModule, this will load routermodule with RouteTable
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
