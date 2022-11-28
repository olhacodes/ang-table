import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PrivacyPolicyRoutingModule } from "./privacy-policy-routing.module";
import { PrivacyPolicyComponent } from "./privacy-policy.component";

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        PrivacyPolicyRoutingModule
    ],
    declarations: [PrivacyPolicyComponent],
    exports: [PrivacyPolicyComponent]
})
export class PrivacyPolicyModule { }