import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';


// all pages 
import { HomeComponent } from "./pages/home/home.component";

//components for app
import { MenuCategoryComponent } from "./components/menu-category/menu-category.component";
import { UserMenuComponent } from "./components/user-menu/user-menu.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 

    //Pages Import
    HomeComponent,
    
    //Components Import
    MenuCategoryComponent,
    UserMenuComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BlogNews';
}
