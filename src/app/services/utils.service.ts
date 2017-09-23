import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {

  constructor() { }

	  /**
	 * Obtains parameters from the hash of the URL
	 * @return Object
	 */
	public getHashParams() : Object {
	    var hashParams = {};
	    var e, r = /([^&;=]+)=?([^&;]*)/g,
	        q = window.location.hash.substring(1);
	    while (e = r.exec(q)) {
	        hashParams[e[1]] = decodeURIComponent(e[2]);
	    }
	    return hashParams;
	}
	/**
	 * Store key:value pairs of an object in localstorage
	 * @param {Object} object [description]
	 */
	public store(object: Object) : void {
		for (var key in object) {
			if (object.hasOwnProperty(key)) {
				var val = object[key];
				localStorage.setItem(key,val);
			}
		}
    }

    public showLocalStorage(): void {
    	console.log(localStorage);
    // var archive = {}, // Notice change here
        var keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        console.log("Key:" + keys[i] + ", Value:" + localStorage.getItem( keys[i] ));
    }


    }

     /**
     * Generates a random string containing numbers and letters
     * @param  {number} length The length of the string
     * @return {string} The generated string
     */
    public generateRandomString(length): string {
      var text = '';
      var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

      for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      return text;
    }

    public clear(): void {
    	localStorage.clear();
    }

}
