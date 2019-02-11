import { AbstractControl } from "@angular/forms";
import { Products } from "../components/productformcomponent/app.product.model";

export class NumericNonNegativeValidators {
  //1. static method
  //2. i/p parameter must be used carefully
  //3. return type is "any"
  static checkVal(ctrl: AbstractControl): any {
    if (parseInt(ctrl.value) > 0) return null;
    // valid
    else return { invalid: true }; // invalid
  }

  static checkProductName(ctrl: AbstractControl): any {
    if (ctrl.value.charAt(0).toUpperCase() === ctrl.value.charAt(0)) {
      return null;
    } else {
      return { invalid: true };
    }
  }

  // static checkCategoryName(ctrl: AbstractControl): any {
  //   if (ctrl.value === "" || ctrl.value === null) {
  //     return null;
  //   } else {
  //     return { invalid: true };
  //   }
  // }

  // static checkUniqueProductId(ctrl: AbstractControl): any {
  //   let products = Object.assign({}, Products);
  //   //console.log(products);
  //   for (let x in products) {
  //     console.log(x[0]);
      
  //     // if (parseInt(ctrl.value) == x.ProductId) {
  //     //   return null;
  //     // }
  //   }
  //   return { invalid: true };
  // }
}
