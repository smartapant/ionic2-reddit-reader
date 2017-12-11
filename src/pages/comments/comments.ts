import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { RedditApiService } from '../../providers/reddit-api-service';

@Component({
  selector: 'page-comments',
  templateUrl: 'comments.html'
})
export class CommentsPage {
  post;
  comments;
  loadCompleted: boolean = false;

  constructor(private redditApi: RedditApiService,
              params: NavParams) {
    this.post = params.get('post');
    this.load();
  }

  load() {
    this.redditApi.fetchComments(this.post).subscribe((comments) => {
      // comments.sort((a,b) => b.score - a.score);
      this.comments = comments;
      this.loadCompleted = true;
    })
  }
}
