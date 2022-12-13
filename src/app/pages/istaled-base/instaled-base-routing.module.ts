import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IstaledBaseComponent } from './istaled-base.component';

const routes: Routes = [
    {path: '', component: IstaledBaseComponent},
  ];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CommonModule, 
        ],
    exports: [RouterModule],
})

export class InstaledBaseRoutingModule { }