import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { RedditApiService } from '../../providers/reddit-api-service';

/*
  Generated class for the Comments page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-comments',
  templateUrl: 'comments.html',
  providers: [RedditApiService],
})
export class CommentsPage {
  post;
  comments;
  loadCompleted: boolean = false;

  constructor(public navCtrl: NavController, public redditApi: RedditApiService, public params: NavParams) {
    this.post = this.params.get('post');
    this.load();
  }

  private load() {
    this.redditApi.fetchComments(this.post).subscribe((comments) => {
      // comments.sort((a,b) => b.score - a.score);
      this.comments = comments;
      this.loadCompleted = true;
      console.log(this.comments)
    })
  }
}
