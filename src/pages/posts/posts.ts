import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { RedditApiService } from '../../providers/reddit-api-service';
import { CommentsPage } from '../comments/comments'

@Component({
  selector: 'page-posts',
  templateUrl: 'posts.html',
  providers: [RedditApiService]
})
export class PostsPage {
  loadCompleted: boolean = false;
  subreddit;

  posts: Array<any>;
  commentsPage = CommentsPage;

  constructor(public navCtrl: NavController, public redditApi: RedditApiService, public navParams: NavParams) {
    this.subreddit = this.navParams.get('subreddit');
    this.load(this.subreddit);
  }

  load(url?) {
    this.redditApi.fetch(url).subscribe((posts) => {
      this.posts = posts;
      this.loadCompleted = true;
      console.log(posts)
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

  testSub(name) {
    this.navCtrl.push(PostsPage, {subreddit: name})
  }

  readPost(post) {
    let redditUrl = 'https://www.reddit.com/r/'
    if (post.url.includes(redditUrl)) {
      this.goToComments(post)
    } else {
      this.goToPost(post);
    }
  }

  goToComments(post) {
    this.navCtrl.push(this.commentsPage, {post: post})
  }

  goToPost(post) {
    window.open(post.url, '_blank');
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
