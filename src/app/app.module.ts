import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BbbodyComponent } from './bbbody/bbbody.component';
import { BbfooterComponent } from './bbfooter/bbfooter.component';
import { BbdirectiviesComponent } from './bbdirectivies/bbdirectivies.component';
import { BbheaderComponent } from './bbheader/bbheader.component';
import { BbstudentsComponent } from './bbstudents/bbstudents.component';
import { BbbikesComponent } from './bbbikes/bbbikes.component';

@NgModule({
  declarations: [
    AppComponent,
    BbbikesComponent,
    BbbodyComponent,
    BbfooterComponent,
    BbdirectiviesComponent,
    BbheaderComponent,
    BbstudentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
