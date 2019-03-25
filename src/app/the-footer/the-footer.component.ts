import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-the-footer',
  template: `
    <footer class="bg-primary fixed-bottom py-2 px-4">
        <nav class="row">
            <a class="col btn btn-primary mr-1 text-center" routerLink="/home">
                <i class="fas fa-wallet d-block mb-1"></i>
                Dashboard
            </a>
            <a class="col btn btn-primary mr-1 text-center" routerLink="/expense-list">
                <i class="fas fa-shopping-bag d-block mb-1"></i>
                Expenses
            </a>
            <a class="col btn btn-primary mr-1 text-center" routerLink="/income-list">
                <i class="fas fa-piggy-bank d-block mb-1"></i>
                Income
            </a>
            <a class="col btn btn-primary mr-1 text-center" routerLink="/settings">
                <i class="fas fa-cogs d-block mb-1"></i>
                Settings
            </a>
        </nav>
    </footer>
  `,
  styles: []
})
export class TheFooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
