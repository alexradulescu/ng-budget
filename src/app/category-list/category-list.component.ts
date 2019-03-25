import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styles: []
})
export class CategoryListComponent implements OnInit {

    categoryList: any;
    category: { key:string, label:string, target:number, showOnDashboard:boolean} = { key:'', label:'', target:0, showOnDashboard:false };
    showCategoryModal: boolean = false;

    constructor(
        public dataService: DataService
    ) { }

    ngOnInit() {
        this.getCategoryList();
    }

    getCategoryList() {
        this.categoryList = this.dataService.getCategoryList();
    }

    openCategoryModal() {
        this.showCategoryModal = true;
    }

    closeModal() {
        this.showCategoryModal = false;
    }

    createCategory() {
        this.dataService.createCategory({
            key             : this.category.label.trim().replace(/ /, '').toLowerCase(),
            label           : this.category.label,
            target          : this.category.target,
            showOnDashboard : this.category.showOnDashboard
        });
        this.category = {
            key             : '',
            label           : '',
            target          : 0,
            showOnDashboard : false
        };
        this.getCategoryList();
        this.closeModal();
    }

}
