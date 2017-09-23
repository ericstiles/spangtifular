// import './rxjs-extensions';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { RoutingModule } from './routing/routing.module';
import { LoginComponent } from './login/login.component';
import { CallbackComponent } from './callback/callback.component';

import { UtilsService } from './services/utils.service';
import { SpotifyService } from './services/spotify.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,

    LoginComponent,

    CallbackComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule
  ],
  providers: [UtilsService, SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
