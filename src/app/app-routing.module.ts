import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { PostComponent } from './post-list/post/post.component';


const routes: Routes = [
  { path: 'posts', component: PostListComponent },
  { path: 'posts/:id', component: PostComponent },
  { path: '',   redirectTo: '/posts', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', redirectTo: '/posts', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
