import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-the-header',
    template: `
        <header class="navbar navbar-expand-md bg-dark navbar-dark fixed-top justify-content-between">
            <a class="navbar-brand" routerLink="/home">
                <i class="fas fa-wallet mr-1"></i>
                Budget
            </a>
            
            <nav>
                <a class="btn btn-dark mr-1" routerLink="/expense-list">Expenses</a>
                <a class="btn btn-dark mr-1" routerLink="/income-list">Income</a>
                <a class="btn btn-dark mr-1" routerLink="/settings">Settings</a>
            </nav>
        </header>
    `,
    styles: []
})
export class TheHeaderComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
