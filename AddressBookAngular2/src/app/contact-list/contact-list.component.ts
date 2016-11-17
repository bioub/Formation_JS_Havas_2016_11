import { Component, OnInit } from '@angular/core';
import {ContactService} from "../contact.service";

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts = [];

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactService.getAll().subscribe((results) => {
      this.contacts = results;
    })
  }

}
