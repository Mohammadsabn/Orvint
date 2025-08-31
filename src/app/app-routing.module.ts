import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrvintNavbarComponent } from './orvint-navbar/orvint-navbar.component';
import { OrvintBackgroundComponent } from './orvint-background/orvint-background.component';
import { OrvintFooterComponent } from './orvint-footer/orvint-footer.component';
const routes: Routes = [
     { path: '', component: OrvintNavbarComponent },
     { path: '', component: OrvintBackgroundComponent },
     { path: '', component: OrvintFooterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
