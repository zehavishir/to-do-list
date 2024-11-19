import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToDoItemModule } from 'src/features/to-do-item/to-do-item.module';
import { A11yModule } from '@angular/cdk/a11y';
import { AddItemModule } from 'src/features/add-item/add-item.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToDoItemModule,
    A11yModule,
    AddItemModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
