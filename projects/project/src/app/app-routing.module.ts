import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { IndexComponent } from './index/index.component';
import { MpdComponent } from './mpd/mpd.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:'',redirectTo:'/index',pathMatch:'full'},
  {path:'index',component:IndexComponent},
  {path:'about',component:AboutComponent},
  {path:'mpd',component:MpdComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'contact',component:ContactComponent},
  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
