import { NgModule } from "@angular/core";
import { NgModel } from "@angular/forms";
import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";

@NgModule({
  declarations: [
    HeroComponent,
    ListComponent
  ],
  exports: [
    HeroComponent,
    ListComponent
  ]
})

export class HeroesModule
{

}
