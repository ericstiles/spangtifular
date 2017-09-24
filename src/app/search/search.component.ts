import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FormGroup, FormControl, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
// import { User } from '../interfaces/user.interface';


// import { Artist }  from '../models/artist.js';

import { SpotifyService } from '../services/spotify.service';
import { UtilsService } from '../services/utils.service';

export class User {
    name: string; // required with minimum 5 chracters
    address?: {
        street?: string; // required
        postcode?: string;
    }
}

export class Artist {
        id: number;
        name: string;
        genres: any;
        albums: Album[];
}

export class Album {
        id: number;
}


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public searchString: string;
  public searchResult: Artist[];

public myForm: FormGroup; // our model driven form
    public submitted: boolean; // keep track on whether form is submitted
    public events: any[] = []; // use later to display form changes	

  constructor(private _fb: FormBuilder, private spotify: SpotifyService, private utils: UtilsService) {
// let nameControl = new FormControl("Nate");



  }

  ngOnInit() {

    // the short way
    this.myForm = this._fb.group({
            name: ['', [<any>Validators.required, <any>Validators.minLength(2)]],
            address: this._fb.group({
                street: ['', <any>Validators.required],
                postcode: ['']
            })
        });

  }
  
      save(model: User, isValid: boolean) {
        this.submitted = true; // set form submit to true

        // check if model is valid
        // if valid, call API to save customer
        console.log(model, isValid);
        this.searchMusic();
    }

  searchMusic() : void{
  	console.log("searchMusic called:" + this.myForm.value);
  	this.utils.store(this.myForm.value);
    this.spotify.searchMusic(this.myForm.value.name).subscribe(result => {  
        console.log(result);
          // this.searchResult = result.artists.items;
      });
  }

}
