import 'rxjs/add/operator/map';

import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';

import { Headers } from '@angular/http';

import { UtilsService } from './utils.service';

class SearchItem {
  constructor(public track: string,
              public artist: string,
              public link: string,
              public thumbnail: string,
              public artistId: string,
              public artists: string,
              public items: string) {}
  }

@Injectable()
export class SpotifyService {
  private searchUrl: string;
  private artistUrl: string;
  private type: string = 'artist';
  private albumsUrl: string;
  private albumUrl: string;
  constructor(private utils: UtilsService, private http: Http) { }

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

    searchMusic(searchString: string) : Observable<SearchItem>{

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('access_token'));

    this.searchUrl =
        `https://api.spotify.com/v1/search?query=${searchString}&offset=0&limit=20&type=${this.type}&market=US`;
    return this.http.get(this.searchUrl, { headers: headers }).map(response => {return response.json()});
  }

}
