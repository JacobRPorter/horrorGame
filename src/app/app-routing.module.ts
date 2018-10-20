import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OpeningComponent } from './opening/opening.component';

const routes: Routes = [
  { path: 'opening', component: OpeningComponent }
]

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
