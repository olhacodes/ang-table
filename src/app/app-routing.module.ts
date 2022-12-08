import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: '', 
    loadChildren: () => import('src/app/pages/istaled-base/instaled-base-routing.module')
    .then( m => m.InstaledBaseRoutingModule),
  },
  {path: '**', redirectTo: '', component: AppComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
