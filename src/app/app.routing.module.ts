import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ItemComponent } from "./pages/item/item.component";
import { NosotrosComponent } from "./pages/nosotros/nosotros.component";
import { PortafolioComponent } from "./pages/portafolio/portafolio.component";

const app_routes: Routes = [
    { path: '', component: PortafolioComponent },
    { path: 'nosotros', component: NosotrosComponent},
    { path: 'item', component: ItemComponent},
    { path: '**', pathMatch: 'full' ,redirectTo: ''}
]

@NgModule({
    imports: [
        RouterModule.forRoot( app_routes )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {

}