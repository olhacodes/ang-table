import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AdvertingComponent } from 'src/app/blocks/adverting/adverting.component';
import { LastViewedBlockComponent } from 'src/app/blocks/last-viewed-block/last-viewed-block.component';
import { TableBlockComponent } from 'src/app/blocks/table-block/table-block.component';
import { AlertComponent } from 'src/app/components/alert/alert.component';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { CardListComponent } from 'src/app/components/card-list/card-list.component';
import { CardComponent } from 'src/app/components/card/card.component';
import { FlagIconComponent } from 'src/app/components/icons/flag-icon/flag-icon.component';
import { IconStarComponent } from 'src/app/components/icons/icon-star/icon-star.component';
import { RadioButtonComponent } from 'src/app/components/icons/radio-button/radio-button.component';
import { TableComponent } from 'src/app/components/table/table.component';
import { SideNavigationComponent } from 'src/app/microservices/side-navigation/side-navigation.component';
import { IstaledBaseComponent } from './istaled-base.component';

const routes: Routes = [
    {path: '', component: IstaledBaseComponent},
    {path: 'contact', 
    loadChildren: () => import('../contact/contact.module')
        .then(m => m.ContactModule)},
    {path: 'privacy-policy', 
    loadChildren: () => import('src/app/pages/privacy-policy/privacy-policy.module')
        .then(m => m.PrivacyPolicyModule)},
    {path: 'product/:id', 
        loadChildren:() => import('../product/product.module')
        .then(m => m.ProductModule)
    }
  ];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CommonModule, 
        NgbModule,
        FormsModule
        ],
    declarations: [
        IstaledBaseComponent,
        TableComponent,     
        RadioButtonComponent,
        CardComponent,
        LastViewedBlockComponent,
        TableBlockComponent,
        CardListComponent,
        IconStarComponent,
        FlagIconComponent,
        ButtonComponent,
        AdvertingComponent,
        AlertComponent,
        SideNavigationComponent,
    ],
    exports: [RouterModule],
})

export class InstaledBaseRoutingModule { }