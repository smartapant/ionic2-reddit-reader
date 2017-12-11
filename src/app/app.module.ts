import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MomentModule } from 'angular2-moment';
import { RedditReaderApp } from './app.component';
import { PostsPage } from '../pages/posts/posts';
import { CommentsPage } from '../pages/comments/comments'
import { CommentsList } from '../pages/comments/commentsList/commentsList'
import { RedditApiService } from "../providers/reddit-api-service";
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BrowserModule } from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    RedditReaderApp,
    PostsPage,
    CommentsPage,
    CommentsList
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(RedditReaderApp),
    MomentModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    RedditReaderApp,
    PostsPage,
    CommentsPage
  ],
  providers: [
    RedditApiService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
