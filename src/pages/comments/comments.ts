import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Comments page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-comments',
  templateUrl: 'comments.html'
})
export class CommentsPage {
  private post;

  constructor(public navCtrl: NavController, public params: NavParams) {
    this.post = this.params.get('post');
    console.log(this.post)
  }
}
