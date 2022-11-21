import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BbbodyComponent } from './bbbody/bbbody.component';
import { BbfooterComponent } from './bbfooter/bbfooter.component';

@NgModule({
  declarations: [
    AppComponent,
    BbbodyComponent,
    BbfooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
