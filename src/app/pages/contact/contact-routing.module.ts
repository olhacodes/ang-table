import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactComponent } from "./contact.component";

const routes:  Routes = [
    {path: '', component: ContactComponent},
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CommonModule, 
        ],
    exports: [RouterModule],
})

export class ContactRoutingModule { }