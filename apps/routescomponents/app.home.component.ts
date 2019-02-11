import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home-component',
    template: `
        <h2>Home Component </h2>
        <div class="container">{{ message }}</div>
    `
})
export class HomeComponent implements OnInit {

    message: string;

    constructor() { 
        this.message = `Hi I am Home Compenent`;
    }

    ngOnInit(): void { }
}
