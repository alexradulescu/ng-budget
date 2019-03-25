import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { IncomeListComponent } from './income-list/income-list.component';
import { CategoryListComponent } from './category-list/category-list.component';

const routes: Routes = [
    { path:'', pathMatch:'full', redirectTo:'home' },
    { path:'home', component:HomeComponent },

    { path:'expense-list', component:ExpenseListComponent },
    { path:'expenses', pathMatch:'full', redirectTo:'expense-list' },


    { path:'income-list', component:IncomeListComponent },
    { path:'incomes', pathMatch:'full', redirectTo:'expense-list' },


    { path:'settings', component:CategoryListComponent },
    
    { path:'**', pathMatch:'full', redirectTo:'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
