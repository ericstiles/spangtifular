import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private loggedIn(): boolean {
    // return this.sessionService.isAuthenticated();
    // return false;
    return localStorage.getItem("access_token") != null
  }

  private login(): void {
    // this.sessionService.login();
  }

  private logout(): void {
    // this.sessionService.logout();
  }

      private getUserData(accessToken) : void {
        // return $.ajax({
        //     url: 'https://api.spotify.com/v1/me',
        //     headers: {
        //        'Authorization': 'Bearer ' + localStorage.getItem("access_token");
        //     }
        // });
    }

}
