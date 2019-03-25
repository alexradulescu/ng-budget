import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
    selector: 'app-contact-list',
    templateUrl: './contact-list.component.html',
    styles: []
})
export class ContactListComponent implements OnInit {

    contactList: any;
    selectedContact: any;

    constructor(
        public dataService: DataService
    ) { }

    ngOnInit() {
        this.contactList = this.dataService.getContacts();
    }

    public selectContact(contact: any): void {
        this.selectedContact = contact;
        console.log(`Selected contact: ${this.selectedContact.name}`);
    }

    public closeModal(): void {
        console.log('Close modal');
        this.selectedContact = null;
    }

    searchContact(searchValue: string): void {
        this.contactList = this.dataService.getContacts().filter(
            contact => contact.name.includes(searchValue) || contact.email.includes(searchValue) || contact.description.includes(searchValue)
        );
    }

}
