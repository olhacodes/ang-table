import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { TableComponent } from './components/table/table.component';
import { RadioButtonComponent } from './components/icons/radio-button/radio-button.component';
import { CardComponent } from './components/card/card.component';
import { LastViewedBlockComponent } from './blocks/last-viewed-block/last-viewed-block.component';
import { TableBlockComponent } from './blocks/table-block/table-block.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { IconStarComponent } from './components/icons/icon-star/icon-star.component';
import { FlagIconComponent } from './components/icons/flag-icon/flag-icon.component';
import { ButtonComponent } from './components/button/button.component';


@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    TableComponent,
    RadioButtonComponent,
    CardComponent,
    LastViewedBlockComponent,
    TableBlockComponent,
    CardListComponent,
    IconStarComponent,
    FlagIconComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
