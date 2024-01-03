import { Component } from '@angular/core';

import { ComponentsModule } from '../../components/components.module';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-entertainment',
  standalone: true,
  imports: [ComponentsModule,CommonModule],
  templateUrl: './entertainment.component.html',
  styleUrl: './entertainment.component.css'
})
export class EntertainmentComponent {

}
