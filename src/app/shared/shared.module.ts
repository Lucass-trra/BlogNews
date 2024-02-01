import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//components shared
import { MenuCategoryComponent } from "./menu-category/menu-category.component";
import { ButtonMoreArticlesComponent } from "./button-more-articles/button-more-articles.component";


@NgModule({
  imports: [
    CommonModule,
    MenuCategoryComponent,
    ButtonMoreArticlesComponent
    
  ],
  exports: [
    MenuCategoryComponent,
    ButtonMoreArticlesComponent
  ]
})
export class SharedModule { }
