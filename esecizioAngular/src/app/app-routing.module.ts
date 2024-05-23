import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivePostsComponent } from './pages/active-posts/active-posts.component';
import { InactivePostsComponent } from './pages/inactive-posts/inactive-posts.component';
import { PostsDetailsComponent } from './pages/posts-details/posts-details.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch: 'full'
  },
  {
    path:'home',
    component: HomeComponent,
    title:'Home'
  },
  {
    path: 'active-posts',
    component: ActivePostsComponent,
    title: 'Active Posts',
  },
  {
    path:'active-posts/:id',
    component: PostsDetailsComponent,
    title: 'Posts Details'
   },
  {
    path: 'inactive-posts',
    component: InactivePostsComponent,
    title: 'Inactive Posts',
   },
   {
    path: 'inactive-posts/:id',
    component: PostsDetailsComponent,
    title: 'Inactive Posts',
   }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
