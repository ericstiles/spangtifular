import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Headers, Response, RequestOptions,  } from '@angular/http'

import { SpotifyService } from '../services/spotify.service';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private currentURL;
    private path;

  constructor(private http: HttpClient, private spotify: SpotifyService, private utils: UtilsService, private router: Router) { }

  ngOnInit() {
	
  this.currentURL = window.location.href;
  this.path = window.location.pathname;
  console.log(this.currentURL);
  console.log(this.path);
  if (this.path == "/logout"){
    this.logout();
  } else
  {
    this.login();  
     // let headers = new Headers({"Content-Type": "application/json", "Authorization": "Bearer " + localStorage.getItem("access_token")});
     // let options = new RequestOptions({ headers: headers });
     const headers = new HttpHeaders()
            // .set("X-CustomHeader", "custom header value")
            .set("Content-Type", "application/json")
            .set("Authorization", "Bearer " + localStorage.getItem("access_token"));
    // this.login();
    this.http.get(this.spotify.getUserDataUrl(),{headers}).subscribe(data => {
      console.log(data);
    });
  }
  }



private loggedIn(): boolean {
    // return this.sessionService.isAuthenticated();
    return false
  }

  private login(): void {
    window.location.href=this.spotify.getAuthURL();
  }

  private logout(): void {
    // this.sessionService.logout();
    this.utils.clear();
    this.utils.showLocalStorage();
    this.router.navigateByUrl('');
  }

}


