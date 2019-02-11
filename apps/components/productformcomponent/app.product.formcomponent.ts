import { Component, OnInit } from "@angular/core";
import { Product, Products, Categories } from "./app.product.model";
import { ProductLogic } from "./app.product.logic";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { NumericNonNegativeValidators } from "../../customValidators/app.custom.validators";

@Component({
  selector: "app-productform-component",
  templateUrl: "./app.productform.view.html"
})
export class ProductFormComponent implements OnInit {
  product: Product;
  private logic: ProductLogic;
  products: Array<Product>;
  isSaved: boolean;
  
  // product id uniqueness checking
  uniqueId: boolean = false;

  // for check box in header
  isHeaderChecked: boolean = false;
  isHeader: boolean = false;


  // all check box checked or unchecked
  checkboxHeader(): void {
    this.isHeaderChecked = !this.isHeaderChecked;
    for (let p of this.products) {
      p.isChecked = this.isHeaderChecked;
    }
    console.log(this.products);
    
  }

  // respective row check box selection
  checkboxRow(i: number): void {
    console.log(this.products);

    this.products[i].isChecked = !this.products[i].isChecked;
    let count = 0;
    for (let x of this.products) {
      if (x.isChecked == true) count++;
    }
    if (count === this.products.length) {
      this.isHeader = true;
    }
    if (count < this.products.length) {
      this.isHeader = false;
    }
  }

  categories = Categories;

  tableHeaders: Array<string>;

  // define formgroup
  frmProduct: FormGroup;

  constructor() {
    this.product = new Product(0, "", "", 0, false);
    this.logic = new ProductLogic();
    this.products = new Array<Product>();
    this.tableHeaders = new Array<string>();
    this.isSaved = false;

    // define an instace of form group and map properties of model class i.e. product class with formControl
    this.frmProduct = new FormGroup({
      ProductId: new FormControl(
        this.product.ProductId,
        Validators.compose([
          Validators.required,
          Validators.maxLength(5),
          Validators.minLength(2),
          Validators.pattern("[0-9]+")
          //NumericNonNegativeValidators.checkUniqueProductId
        ])
      ),
      ProductName: new FormControl(
        this.product.ProductName,
        Validators.compose([
          Validators.pattern("\\s{0,2}|[a-zA-Z]+"),
          Validators.required,
          NumericNonNegativeValidators.checkProductName
        ])
      ),
      CategoryName: new FormControl(
        this.product.CategoryName,
        Validators.compose([
          Validators.required
          // //NumericNonNegativeValidators.checkCategoryName
        ])
      ),
      Price: new FormControl(
        this.product.Price,
        Validators.compose([NumericNonNegativeValidators.checkVal])
      )
    });
  }

  // invoke just after constructor automatically
  ngOnInit(): void {
    this.products = this.logic.getProducts();

    // read all properties of Product class and push them into tablehearder array
    for (let p in this.product) {
      this.tableHeaders.push(p);
    }
  }

  clear(): void {
    this.product = new Product(0, "", "", 0, false);
  }

  save(): void {
    this.product = this.frmProduct.value;
    this.products = this.logic.saveProduct(this.product);
    //alert(JSON.stringify(this.products));
    this.isSaved = false;
  }

  loadForm(): void {
    this.isSaved = true;
  }

  getSelectedrow(p: Product): void {
    // 1. create a deep copy of the selected product
    // 2. assign that copy to this.product
    this.product = Object.assign({}, p);
  }

  // delete opertion of selected checkbox
  delete(): void {
    this.products.forEach((value, index) => {
      if (value.isChecked == true) {
        console.log(index);
        this.products = this.logic.deleteProduct(index);
      }
    });
  }

  // finding unique id
  checkUniqueId(): void {
    this.product = this.frmProduct.value;
    for (let x of Products) {
      if (this.product.ProductId == x.ProductId) {
        this.uniqueId = true;
        break;
      } else {
        this.uniqueId = false;
      }
    }
  }
}
