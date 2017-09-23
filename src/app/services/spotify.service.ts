import { Injectable } from '@angular/core';

import { UtilsService } from './utils.service';

@Injectable()
export class SpotifyService {

  constructor(private utils: UtilsService) { }

  /**
   * [getAuthURL description]
   * @return {String} [description]
   */
  public getAuthURL(): string {

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
  	return url;
  }

  public getUserDataUrl(): string {
  		var url = 'https://api.spotify.com/v1/me'
  		return url;
  }

}
