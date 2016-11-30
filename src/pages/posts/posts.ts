import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {RedditApiService} from '../../providers/reddit-api-service';

@Component({
  selector: 'page-posts',
  templateUrl: 'posts.html',
  providers: [RedditApiService]
})
export class PostsPage {
  public loadCompleted: boolean = false;

  private posts: Array<any>;

  constructor(public navCtrl: NavController, public redditApi: RedditApiService) {
    this.load();
  }

  private load(): void {
    this.redditApi.fetchHot().subscribe((posts) => {
      this.posts = posts;
      this.loadCompleted = true;
      console.log(posts)
    })
  }

  public getPostImage(post) {
   return post.preview && post.preview.images[0].source.url;
  }

  loadMore(infiniteScroll) {
    let lastPost = this.posts[this.posts.length - 1];
    if (!lastPost) {
      infiniteScroll.complete()
    } else {
      this.redditApi.fetchNext(lastPost.name).subscribe((posts) => {
        this.posts = this.posts.concat(posts);
        infiniteScroll.complete();
      })
    }
  }
}
