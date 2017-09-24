import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';
import { CommonModule }             from '@angular/common';

import { HomeComponent }            from '../home/home.component';
import { LoginComponent }           from '../login/login.component';
import { CallbackComponent }        from '../callback/callback.component';
import { PageNotFoundComponent }    from '../page-not-found/page-not-found.component';
import { SearchComponent }    from '../search/search.component';

const routes: Routes = [
    { path: '',     component: HomeComponent },
    { path: 'login',     component: LoginComponent },
    { path: 'logout',    component: LoginComponent },
    { path: 'callback',  component: CallbackComponent },
    { path: 'search',    component: SearchComponent },    
    { path: '**',        component: PageNotFoundComponent }
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
