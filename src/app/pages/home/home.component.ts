import { Component } from '@angular/core';

import { ComponentsModule } from "../../components/components.module";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ComponentsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
