import { RequestsServise } from './requests.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { NgModule, ApplicationInitStatus } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppContactComponent } from './app-contact/app-contact.component';
import { AppEditComponent } from './app-edit/app-edit.component';
import { ItemComponent } from './item/item.component';
import { NewComponent } from './new/new.component';


@NgModule({
  declarations: [
    AppComponent,
    AppContactComponent,
    AppEditComponent,
    ItemComponent,
    NewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [RequestsServise],
  bootstrap: [AppComponent]
})
export class AppModule { }
