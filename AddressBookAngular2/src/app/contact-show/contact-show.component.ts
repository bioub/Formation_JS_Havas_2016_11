import { Component, OnInit } from '@angular/core';
import {ContactService} from "../contact.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'contact-show',
  templateUrl: './contact-show.component.html',
  styleUrls: ['./contact-show.component.css']
})
export class ContactShowComponent implements OnInit {

  public contact: Observable<Object>;

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.contact = this.route.params
      .switchMap((params: Params) => this.contactService.get(+params['id']));
  }

}
