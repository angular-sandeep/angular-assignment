import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-error-component',
    template:`
        <h1> this is error component</h1>
    ` 
})
export class ErrorComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}
