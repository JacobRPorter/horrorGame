import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OpeningComponent } from './opening/opening.component';
import { SnowComponent } from './snow/snow.component';

const routes: Routes = [
  { path: '', redirectTo: '/opening', pathMatch: 'full'},
  { path: 'opening', component: OpeningComponent },
  { path: 'snow', component: SnowComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
