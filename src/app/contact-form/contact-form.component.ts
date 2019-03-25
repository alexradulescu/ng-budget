import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
    selector: 'app-contact-form',
    templateUrl: './contact-form.component.html',
    styles: []
})
export class ContactFormComponent implements OnInit {

    contact: { id: Number, name: String, description: String, email:String } = { id:null, name:'', description:'', email:'' };

    constructor(
        public dataService: DataService
    ) { }

    ngOnInit() {
    }

    createContact($event: any):void {
        $event.preventDefault();
        if (this.contact.id && this.contact.name) {
            console.log(this.contact);
            this.dataService.createContact(this.contact);
            this.contact = { id:null, name:'', description:'', email:'' };
        } else {
            alert('Contact ID and Name are required!');
        }
    }
}
