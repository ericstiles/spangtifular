import { Component, OnInit } from '@angular/core';

import { SpotifyService } from '../services/spotify.service';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private spotify: SpotifyService, private utils: UtilsService) { }

  ngOnInit() {
	this.login();
  }



private loggedIn(): boolean {
    // return this.sessionService.isAuthenticated();
    return false
  }

  private login(): void {
    var stateKey = 'spotify_auth_state';
            var client_id = 'b5c133ff1ffb40649178cae000645081'; // Your client id
            var redirect_uri = 'http://localhost:4200/callback'; // Your redirect uri

            var state = this.utils.generateRandomString(16);

            localStorage.setItem(stateKey, state);
            var scope = 'user-read-private user-read-email';

            var url = 'https://accounts.spotify.com/authorize';
            url += '?response_type=token';
            url += '&client_id=' + encodeURIComponent(client_id);
            url += '&scope=' + encodeURIComponent(scope);
            url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
            url += '&state=' + encodeURIComponent(state);

            window.location.href=url;
  }

  private logout(): void {
    // this.sessionService.logout();
  }

}


