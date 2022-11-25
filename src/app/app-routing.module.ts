import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './pages/contact/contact.component';
import { IstaledBaseComponent } from './pages/istaled-base/istaled-base.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';

const routes: Routes = [
  {path: 'istaled-base', component: IstaledBaseComponent},
  { path: '',   redirectTo: 'istaled-base', pathMatch: 'full' },
  {path: 'contact', component: ContactComponent},
  {path: 'privacy-policy', component: PrivacyPolicyComponent},
  {path: '**', redirectTo: '', component: AppComponent, pathMatch: 'full'},
];

export const routing = RouterModule.forRoot(routes, { enableTracing: true })
console.log(routing)
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
