import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './component/dashbord/dashbord.component';
import { PostComponent } from './component/post/post.component';
import { PostsComponent } from './component/posts/posts.component';
import { CreatepostComponent } from './component/createpost/createpost.component';

const routes: Routes = [
  {
    path:'', component:DashbordComponent
  },
  {
    path:'post', component:PostComponent
  },
  
    {
      path:'post/:id', component:PostsComponent
    },
    {
      path:'create', component:CreatepostComponent
    },
    {
      path:'create/:id', component:CreatepostComponent
    }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
