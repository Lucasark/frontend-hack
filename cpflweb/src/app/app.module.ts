import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormOperadorComponent } from './form-operador/form-operador.component';
import { OperadorDetailsComponent } from './operador-details/operador-details.component';
import { OperadorListComponent } from './operador-list/operador-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }    from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    FormOperadorComponent,
    OperadorDetailsComponent,
    OperadorListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
