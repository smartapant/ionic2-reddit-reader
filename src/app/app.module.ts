import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MomentModule } from 'angular2-moment';
import { RedditReaderApp } from './app.component';
import { PostsPage } from '../pages/posts/posts';
import { CommentsPage } from '../pages/comments/comments';
import { CommentsList } from '../pages/comments/commentsList/commentsList';
import { SettingsPage } from '../pages/settings/settings';

@NgModule({
  declarations: [
    RedditReaderApp,
    PostsPage,
    CommentsPage,
    CommentsList,
    SettingsPage
  ],
  imports: [
    IonicModule.forRoot(RedditReaderApp),
    MomentModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    RedditReaderApp,
    PostsPage,
    CommentsPage,
    SettingsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
