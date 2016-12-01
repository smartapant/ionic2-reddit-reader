import { Component, Input } from '@angular/core';

@Component({
  selector: 'comments-list',
  templateUrl: 'commentsList.html',
  providers: [],
})
export class CommentsList {
  @Input() comments;

  constructor() {}

  collapse(comment) {
    comment.collapsed = !comment.collapsed;
  }
}
