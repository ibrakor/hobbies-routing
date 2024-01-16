import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FotosComponent} from "./components/fotos/fotos.component";
import {VideosComponent} from "./components/videos/videos.component";
import {MusicaComponent} from "./components/musica/musica.component";

const routes: Routes = [
  { path: 'fotos', component: FotosComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'musica', component: MusicaComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
