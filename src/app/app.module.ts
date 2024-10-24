import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashbordComponent } from './component/dashbord/dashbord.component';
import { PostComponent } from './component/post/post.component';
import { PostsComponent } from './component/posts/posts.component';
import { CreatepostComponent } from './component/createpost/createpost.component';
import { NavComponent } from './component/nav/nav.component';
import{HTTP_INTERCEPTORS, HttpClientModule}from'@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { InterseptoreService } from './interseptore.service';
@NgModule({
  declarations: [
    AppComponent,
    DashbordComponent,
    PostComponent,
    PostsComponent,
    CreatepostComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:InterseptoreService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
