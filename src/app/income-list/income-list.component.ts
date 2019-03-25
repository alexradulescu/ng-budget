import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
    selector: 'app-income-list',
    templateUrl: './income-list.component.html',
    styles: []
})
export class IncomeListComponent implements OnInit {

    incomeList: any;
        
    constructor(
        public dataService: DataService
    ) { }

    ngOnInit() {
        this.incomeList = this.dataService.getIncomeList();
    }

}
