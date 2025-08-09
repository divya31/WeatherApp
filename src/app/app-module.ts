import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Dashboard } from './dashboard/dashboard';
import { Detail } from './detail/detail';
import { Summary } from './summary/summary';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';  // <-- Import FormsModule

@NgModule({
  declarations: [
    App,
    Dashboard,
    Detail,
    Summary
    ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],

  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  
  bootstrap: [App]
})
export class AppModule { }
