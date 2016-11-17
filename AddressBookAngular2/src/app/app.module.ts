import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
import { ContactListComponent } from './contact-list/contact-list.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { ContactAddComponent } from './contact-add/contact-add.component';
import { ContactShowComponent } from './contact-show/contact-show.component';
import {ContactService} from "./contact.service";
import { CapitalizePipe } from './capitalize.pipe';
import { ContactCardComponent } from './contact-card/contact-card.component';



@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactAddComponent,
    ContactShowComponent,
    CapitalizePipe,
    ContactCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([{
      path: '',
      component: ContactListComponent
    },{
      path: 'ajouter',
      component: ContactAddComponent
    },{
      path: 'afficher/:id',
      component: ContactShowComponent
    }]),
    NgbModule.forRoot()
  ],
  providers: [
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
