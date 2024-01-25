import { NgModule } from '@angular/core';

import { TitleComponent } from "./title/title.component";
import { MenuCategoryComponent } from "../shared/menu-category/menu-category.component";
import { BigCardComponent } from "./big-card/big-card.component";
import { SmallCardComponent } from "./small-card/small-card.component";




@NgModule({
  imports: [
    TitleComponent,
    MenuCategoryComponent,
    BigCardComponent,
    SmallCardComponent
  ],
  exports: [
    TitleComponent,
    MenuCategoryComponent,
    BigCardComponent,
    SmallCardComponent
  ],
})

export class ComponentsModule { }
