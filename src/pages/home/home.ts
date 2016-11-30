import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {RedditApiService} from '../../providers/reddit-api-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [RedditApiService]
})
export class HomePage {

  constructor(public navCtrl: NavController, public redditApi: RedditApiService) {
    redditApi.fetchHot().subscribe((data) => console.log(data))
  }

}
