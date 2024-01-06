import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserMenuComponent } from "./user-menu/user-menu.component";
import { TitleComponent } from "./title/title.component";
import { MenuCategoryComponent } from "./menu-category/menu-category.component";
import { BigCardComponent } from "./big-card/big-card.component";
import { SmallCardComponent } from "./small-card/small-card.component";




@NgModule({
  imports: [
    UserMenuComponent,
    TitleComponent,
    MenuCategoryComponent,
    BigCardComponent,
    SmallCardComponent
  ],
  exports: [
    UserMenuComponent,
    TitleComponent,
    MenuCategoryComponent,
    BigCardComponent,
    SmallCardComponent
  ],
})

export class ComponentsModule { }
