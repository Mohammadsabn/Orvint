import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// --------------------------------    Md & Abhi's  ------------------------------------------- 


import { HttpClientModule } from '@angular/common/http';

import { ApiserviceService } from './apiservice.service';
import { OrvintBackgroundComponent } from './orvint-background/orvint-background.component';
import { OrvintFeaturesComponent } from './orvint-features/orvint-features.component';
import { OrvintFooterComponent } from './orvint-footer/orvint-footer.component';
import { OrvintNavbarComponent } from './orvint-navbar/orvint-navbar.component';

// --------------------------------    Mahesh ------------------------------------------- 


@NgModule({
  declarations: [
    AppComponent,
    OrvintBackgroundComponent,
    OrvintFeaturesComponent,
    OrvintFooterComponent,
    OrvintNavbarComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
