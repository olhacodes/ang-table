import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: '', 
    loadChildren: () => import('src/app/pages/home/home-routing.module')
    .then( m => m.HomeRoutingModule),
  },
  {path: '**', redirectTo: '', component: AppComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
