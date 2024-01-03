import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../components/components.module';

@Component({
  selector: 'app-sports',
  standalone: true,
  imports: [ComponentsModule,CommonModule],
  templateUrl: './sports.component.html',
  styleUrl: './sports.component.css'
})
export class SportsComponent {

}
