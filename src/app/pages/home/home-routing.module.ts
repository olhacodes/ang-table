import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//pages
import { IstaledBaseComponent } from '../istaled-base/istaled-base.component';
import { HomeComponent } from './home.component';
//blocks
import { TableBlockComponent } from '../istaled-base/table-block/table-block.component';
import { AdvertingComponent } from 'src/app/blocks/adverting/adverting.component';
import { NotificationsBlockComponent } from './blocks/notifications/notifications-block.component';
import { LastViewedBlockComponent } from 'src/app/blocks/last-viewed-block/last-viewed-block.component';
import { OrdersBlockComponent } from './blocks/orders-block/orders-block.component';
import { ServiceTiketsBlockComponent } from './blocks/service-tikets-block/service-tikets-block.component';
//components
import { AlertComponent } from 'src/app/components/alert/alert.component';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { CardListComponent } from 'src/app/components/card-list/card-list.component';
import { CardComponent } from 'src/app/components/card-list/card/card.component';
import { FlagIconComponent } from 'src/app/components/icons/flag-icon/flag-icon.component';
import { IconStarComponent } from 'src/app/components/icons/icon-star/icon-star.component';
import { RadioButtonComponent } from 'src/app/components/icons/radio-button/radio-button.component';
import { TableTitleComponent } from 'src/app/components/table/table-title/table-title.component';
import { InstaledBaseTableComponent } from 'src/app/components/table/instaled-base-table/instaled-base-table.component';
//microservices
import { SideNavigationComponent } from 'src/app/microservices/side-navigation/side-navigation.component';
import { TableComponent } from 'src/app/components/table/table/table.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'instaled-base', 
  loadChildren: () => import('../istaled-base/instaled-base-routing.module')
      .then(m => m.InstaledBaseRoutingModule)},
  {path: 'contact', 
  loadChildren: () => import('../contact/contact.module')
      .then(m => m.ContactModule)},
  {path: 'privacy-policy', 
  loadChildren: () => import('src/app/pages/privacy-policy/privacy-policy.module')
      .then(m => m.PrivacyPolicyModule)},
  {path: 'product/:id', 
      loadChildren:() => import('../product/product.module')
      .then(m => m.ProductModule)
  },
  {path: 'orders', 
      loadChildren:() => import('../orders/orders.module')
      .then(m => m.OrdersModule)
  },
  {path: 'orders/:id', 
      loadChildren:() => import('../orders/orders.module')
      .then(m => m.OrdersModule)
  },
  {path: 'service-tikets', 
      loadChildren:() => import('../service-tikets/service-tikets.module')
      .then(m => m.ServiceTiketsModule)
  },
  {path: 'service-tikets/:id', 
      loadChildren:() => import('../service-tikets/service-tikets.module')
      .then(m => m.ServiceTiketsModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    NgbModule,
    FormsModule,
    CommonModule, 
  ],
  exports: [RouterModule],
  declarations: [
    HomeComponent,
    InstaledBaseTableComponent,
    TableTitleComponent,
    RadioButtonComponent,
    CardComponent,
    LastViewedBlockComponent,
    CardListComponent,
    IconStarComponent,
    FlagIconComponent,
    AlertComponent,
    SideNavigationComponent,
    TableBlockComponent,
    AdvertingComponent,
    ButtonComponent,
    IstaledBaseComponent,
    NotificationsBlockComponent,
    OrdersBlockComponent,
    TableComponent,
    ServiceTiketsBlockComponent
  ]
})
export class HomeRoutingModule { }
