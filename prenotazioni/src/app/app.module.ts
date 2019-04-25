import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { FormPrenotazioniComponent } from './form-prenotazioni/form-prenotazioni.component';
import {   
 FormsModule,
 ReactiveFormsModule
} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    FormPrenotazioniComponent
  ],
  imports: [
    BrowserModule,
     FormsModule,  
   ReactiveFormsModule,
    BrowserModule, NgbModule 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
