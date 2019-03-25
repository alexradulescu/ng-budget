import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
    selector: 'app-category-balance-list',
    templateUrl: './category-balance-list.component.html',
    styles: []
})
export class CategoryBalanceListComponent implements OnInit {

    categoryBalanceList: any;

    constructor(
        public dataService: DataService
    ) { }

    ngOnInit() {
        this.categoryBalanceList = this.dataService.getCategoriesBalance().filter(item => item.showOnDashboard);
    }

}
