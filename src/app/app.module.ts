import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './site/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID } from '@angular/core';
import fr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './site/login/login.component';
import { NavmenuComponent } from './site/shared/navmenu/navmenu.component';
import { PlayersComponent } from './site/data/players/players.component';
import { FooterComponent } from './site/shared/footer/footer.component';
import { EventsComponent } from './site/data/events/events.component';
import { ContestsComponent } from './site/data/contests/contests.component';
registerLocaleData(fr);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavmenuComponent,
    PlayersComponent,
    FooterComponent,
    EventsComponent,
    ContestsComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    MatCheckboxModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{provide: LOCALE_ID, useValue: "fr-CA"}],
  bootstrap: [AppComponent]
})
export class AppModule { }
