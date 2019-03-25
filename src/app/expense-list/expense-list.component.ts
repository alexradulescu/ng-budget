import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
    selector: 'app-expense-list',
    templateUrl: './expense-list.component.html',
    styles: []
})
export class ExpenseListComponent implements OnInit {

    expenseList: any;
    
    constructor(
        public dataService: DataService
    ) { }

    ngOnInit() {
        this.expenseList = this.dataService.getExpenseList();
    }

    getCategoryLabel(category:string):string {
        return this.dataService.getCategoryLabel(category);
    }

}
