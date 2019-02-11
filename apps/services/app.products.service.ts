import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs";
import { Product } from "./../models/app.product.model";

@Injectable()
export class ProductService {
  url: string;

  constructor(private http: Http) {
    this.url = "http://localhost:3000";
  }

  getData(): Observable<Response> {
    let resp: Observable<Response>;
    resp = this.http.get(`${this.url}/api/product`);
    return resp;
  }

  postData(prd: Product): Observable<Response> {
    let resp: Observable<Response>;
    // 1. define request header
    let header: Headers = new Headers({ "Content-Type": "application/json" });

    //header.append("AUTHORIZATION", "Basic sandeep:sandeep@123");

    // 2.define request option for header
    // collection of header values
    let options: RequestOptions = new RequestOptions();
    options.headers = header;
    resp = this.http.post(
      `${this.url}/api/product`,
      JSON.stringify(prd),
      options
    );

    return resp;
  }

  putData(id: number, prd: Product): Observable<Response> {
    let resp: Observable<Response>;
    let header: Headers = new Headers({ "Content-Type": "application/json" });
    let options: RequestOptions = new RequestOptions();
    options.headers = header;
    resp = this.http.put(
      `${this.url}/api/product/${id}`,
      JSON.stringify(prd),
      options
    );

    return resp;
  }

  deleteData(id: number): Observable<Response> {
    let resp: Observable<Response>;
    resp = this.http.delete(`${this.url}/api/product/${id}`);
    return resp;
  }
}
