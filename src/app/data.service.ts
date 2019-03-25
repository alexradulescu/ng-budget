import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    contacts = [
        {id: 1, name: "Contact 001", description: "Contact 001 des", email: "c001@email.com"},
        {id: 2, name: "Contact 002", description: "Contact 002 des", email: "c002@email.com"},
        {id: 3, name: "Contact 003", description: "Contact 003 des", email: "c003@email.com"},
        {id: 4, name: "Contact 004", description: "Contact 004 des", email: "c004@email.com"}
    ];
    
    public getContacts(): Array<{id, name, description, email}> {
        return this.contacts;
    }

    public createContact(contact: {id, name, description, email}): void {
        this.contacts.push(contact);
    }

    categoryList = [
        { key: 'home', label: 'Home', target: 500, showOnDashboard: true },
        { key: 'fun', label: 'Fun', target: 300, showOnDashboard: false },
        { key: 'vacation', label: 'Vacation', target: 0, showOnDashboard: true },
        { key: 'donation', label: 'Donation', target: 200, showOnDashboard: false },
        { key: 'shopping', label: 'Shopping', target: 250, showOnDashboard: true },
    ];

    public getCategoryList(): Array<{key:string, label:string}> {
        return this.categoryList.map(item => ({
            key: item.key, label: item.label
        }));
    }

    public getCategoryListOnDashboard(): Array<{key:string, label:string, target:number}> {
        return this.categoryList.filter(item => item.showOnDashboard)
    }

    public getCategoryLabel(key:string): string {
        const category = this.categoryList.find(item => item.key === key);
        return category ? category.label : '';
    }

    public createCategory(category: {key:string, label:string, target:number, showOnDashboard:boolean }): void {
        this.categoryList.push(category);
    }

    expenseList = [
        { category: 'home', amount: 15, notes: 'Pranz Alex' },
        { category: 'vacation', amount: 20, notes: 'Ceas' },
        { category: 'donation', amount: 8, notes: 'Donatie USR' },
        { category: 'fun', amount: 19, notes: 'Cadou' },
        { category: 'home', amount: 33, notes: 'Cols Storage' },
    ];

    public getExpenseList(category?: string): Array<{category:string, amount:number, notes?:string}> {
        return category 
            ? this.expenseList.filter(item => item.category === category)
            : this.expenseList;
    }

    public createExpense(expense: {category: string, amount:number, notes:string}): void {
        this.expenseList.push(expense);
    }

    public getExpenseTotal(): number {
        let total = 0;
        this.expenseList.forEach(expense => total += expense.amount);
        return total;
    }

    incomeList = [
        { amount: 9000, notes: 'Pranz Alex' },
        { amount: 100, notes: 'Cashback' },
    ];

    public getIncomeList(): Array<{amount:number, notes:string}> {
        return this.incomeList;
    }

    public createIncome(income: {amount:number, notes:string}): void {
        this.incomeList.push(income);
    }

    public getIncomeTotal(): number {
        let total = 0;
        this.incomeList.forEach(income => total += income.amount);
        return total;
    }

    public getBalance(): number {
        return this.getIncomeTotal() - this.getExpenseTotal();
    }

    public getCategoriesBalance(): Array<{amount: number, target: number, label: string, showOnDashboard: boolean}> {
        return this.categoryList.map(category => {
            let amount = 0;
            this.expenseList.forEach(expense => {
                if (expense.category == category.key) {
                    amount += expense.amount;
                }
            });
            return {
                target          : category.target,
                label           : category.label,
                showOnDashboard : category.showOnDashboard,
                amount          : amount,
                percentage      : category.target > 0 ? amount/category.target*100+'%' : '100%'
            };
        })
    }

    constructor() { }

    public generateNextID(): Number {
        return this.contacts[this.contacts.length - 1].id + 1;
    }
}
