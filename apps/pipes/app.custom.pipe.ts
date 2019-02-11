import { PipeTransform, Pipe } from "@angular/core";
import { pipe } from "@angular/core/src/render3";

@Pipe({ name: "prodFilter" })
export class ProductSearchFilterPipe implements PipeTransform {
  transform(value: any, args: string[]): any {
    // filter products on UI
    // can help to search product info
    let filtervalue = args;
    if (filtervalue) {
      return value.filter(prd => {
        prd.prodName.toLowerCase().indexOf(filtervalue) != -1;
      });
    } else {
      return value;
    }
  }
}
