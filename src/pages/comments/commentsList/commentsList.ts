import { Component, Input } from '@angular/core';

@Component({
  selector: 'comments-list',
  templateUrl: 'commentsList.html'
})
export class CommentsList {
  @Input() comments;

  constructor() {}

  toggleExpanded(comment) {
    comment.expanded = !comment.expanded;
  }

  trackByCommentId(index, comment) {
    return comment.id;
  }
}
