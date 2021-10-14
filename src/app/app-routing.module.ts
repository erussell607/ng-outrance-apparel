import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {BlogComponent} from './blog/blog.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'blog', component: BlogComponent},
  // {path: 'socials', component: SocialsComponent},

  // { path: 'second-component', component: SecondComponent },
  {path: '', redirectTo: '/home', pathMatch: 'full'}, // redirect to `first-component`
  // {path: '**', component: PageNotFoundComponent},  // Wildcard route for a 404 page
  {path: '**', component: HomeComponent},  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
