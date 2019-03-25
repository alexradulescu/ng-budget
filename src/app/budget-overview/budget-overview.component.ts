import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-budget-overview',
  templateUrl: './budget-overview.component.html',
  styles: []
})
export class BudgetOverviewComponent implements OnInit {

    balance: number = 0;
    incomeTotal: number = 0;
    expenseTotal: number = 0;
    categoryList: any;

    constructor(
        public dataService: DataService
    ) { }

    ngOnInit() {
        this.balance        = this.dataService.getBalance();
        this.incomeTotal    = this.dataService.getIncomeTotal();
        this.expenseTotal   = this.dataService.getExpenseTotal();
        this.categoryList   = this.dataService.getCategoryList();
    }

}
