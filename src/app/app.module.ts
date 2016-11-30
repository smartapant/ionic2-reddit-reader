import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { RedditReaderApp } from './app.component';
import { PostsPage } from '../pages/posts/posts';

@NgModule({
  declarations: [
    RedditReaderApp,
    PostsPage
  ],
  imports: [
    IonicModule.forRoot(RedditReaderApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    RedditReaderApp,
    PostsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
