import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ContactRoutingModule } from "./contact-routing.module";
import { ContactComponent } from "./contact.component";

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        ContactRoutingModule
    ],
    declarations: [ContactComponent],
    exports: [ContactComponent]
})
export class ContactModule { }
  