import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { SimpleComponent } from "./components/simplecomponent/app.simple.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CalculatorComponent } from "./components/calculator/app.calculator.component";
import { ProductComponent } from "./components/productcomponent/app.product.component";
import { ProductFormComponent } from "./components/productformcomponent/app.product.formcomponent";
import { SampleService } from "./services/app.sample.service";
import { SampleServiceComponent } from "./components/sampleservicecomponent/app.sampleservice.component";
import { ProductServiceComponent } from "./components/productservicecomponent/app.productservice.component";
import { HttpModule } from "@angular/http";
import { ProductService } from "./services/app.products.service";
import { CommunicationService } from "./services/app.communication.service";
import { ProductReceiverComponent } from "./components/io/productreceiver.component";
import { CategorySenderComponent } from "./components/io/categorysender.component";
import { HomeComponent } from "./routescomponents/app.home.component";
import { ContactComponent } from "./routescomponents/app.contact.component";
import { AboutComponent } from "./routescomponents/app.about.component";
import { routing } from "./routescomponents/app.route.table";
import { MainComponent } from "./routescomponents/app.main.component";
import { ErrorComponent } from "./routescomponents/app.error.component";
import { AppGuardService } from "./services/app.test.guard.service";
import { PipeComponent } from "./pipes/app.pipe.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ], // angular modules
  bootstrap: [ PipeComponent ],
  declarations: [
    ProductComponent,
    ProductFormComponent,
    SampleServiceComponent,
    ProductServiceComponent,
    ProductReceiverComponent,
    CategorySenderComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    MainComponent, 
    ErrorComponent,PipeComponent
  ], // lazy loading of component/directives
  providers: [SampleService, ProductService, CommunicationService, AppGuardService], // services (lazy loading but object is pre created)
  exports: [] // optional (used for re usability of module)
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
