import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LoginComponent } from '../login/login.component';
import { CallbackComponent } from '../callback/callback.component';

const routes: Routes = [
    { path: 'login',     component: LoginComponent },
    { path: 'callback',     component: CallbackComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})

export class RoutingModule { 



}
