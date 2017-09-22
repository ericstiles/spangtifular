import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { UtilsService } from '../services/utils.service'

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})

/**
 * Store access_token in localStorage and forward to home page
 */
export class CallbackComponent implements OnInit {

  constructor(private router: Router, private utils: UtilsService) {};

  ngOnInit() {

  	console.log(this.utils.getHashParams());
	this.utils.store(this.utils.getHashParams());
	this.router.navigateByUrl('');

	//GET USER INFO

  }

}
