import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { RedditApiService } from '../../providers/reddit-api-service';
import { CommentsPage } from '../comments/comments'

@Component({
  selector: 'page-posts',
  templateUrl: 'posts.html'
})
export class PostsPage {
  loadCompleted: boolean = false;
  subreddit;

  posts: Array<any>;
  commentsPage = CommentsPage;

  constructor(private navCtrl: NavController,
              private redditApi: RedditApiService,
              navParams: NavParams) {
    this.subreddit = navParams.get('subreddit');
    this.load(this.subreddit);
  }

  load(url?) {
    this.redditApi.fetch(url).subscribe((posts) => {
      this.posts = posts;
      this.loadCompleted = true;
    })
  }

  getPostImage(post) {
   let postImage = '';
   if (!post.imageError && post.preview) {
     postImage = post.preview.images[0].source.url;
   }
   return postImage;
  }

  setImageError(post) {
    post.imageError = true;
  }

  readPost(post) {
    let redditUrl = 'https://www.reddit.com/r/';
    if (post.url.includes(redditUrl)) {
      this.goToComments(post)
    } else {
      this.goToPost(post);
    }
  }

  goToComments(post) {
    this.navCtrl.push(this.commentsPage, {post})
  }

  goToPost(post) {
    window.open(post.url, '_blank');
  }

  goToSubreddit(subreddit) {
    this.navCtrl.push(PostsPage, {subreddit})
  }

  loadMore(infiniteScroll) {
    let lastPost = this.posts[this.posts.length - 1];
    if (!lastPost) {
      infiniteScroll.complete()
    } else {
      this.redditApi.fetchNext(lastPost.name, this.subreddit).subscribe((posts) => {
        this.posts = this.posts.concat(posts);
        infiniteScroll.complete();
      })
    }
  }
}
