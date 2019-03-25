import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { TheFooterComponent } from './the-footer/the-footer.component';
import { TheHeaderComponent } from './the-header/the-header.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { IncomeListComponent } from './income-list/income-list.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { BudgetOverviewComponent } from './budget-overview/budget-overview.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { CategoryBalanceListComponent } from './category-balance-list/category-balance-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactListComponent,
    ContactFormComponent,
    TheFooterComponent,
    TheHeaderComponent,
    ExpenseListComponent,
    IncomeListComponent,
    CategoryListComponent,
    BudgetOverviewComponent,
    TransactionListComponent,
    CategoryBalanceListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
