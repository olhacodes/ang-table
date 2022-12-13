import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { OrdersBlockComponent } from './blocks/orders-block/orders-block.component';
import { ServiceTiketsBlockComponent } from './blocks/service-tikets-block/service-tikets-block.component';
import { LastViewedBlockModule } from 'src/app/blocks/last-viewed-block/last-viewed-block.module';
import { NotificationsBlockModule } from './blocks/notifications/notifications-block.module';
import { TableModule } from 'src/app/components/table/table/table.module';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'instaled-base', 
  loadChildren: () => import('../istaled-base/instaled-base.module')
      .then(m => m.InstaledBaseModule)},
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
    CommonModule,
    LastViewedBlockModule,
    NotificationsBlockModule,
    TableModule,
  ],
  exports: [RouterModule],
  declarations: [
    HomeComponent,
    OrdersBlockComponent,
    ServiceTiketsBlockComponent,
  ]
})
export class HomeRoutingModule { }
