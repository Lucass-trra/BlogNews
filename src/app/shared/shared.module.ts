import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//components shared
import { MenuCategoryComponent } from "./menu-category/menu-category.component";


@NgModule({
  imports: [
    CommonModule,
    MenuCategoryComponent
    
  ],
  exports: [
    MenuCategoryComponent
  ]
})
export class SharedModule { }
