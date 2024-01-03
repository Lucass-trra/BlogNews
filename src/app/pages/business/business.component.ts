import { Component } from '@angular/core';

import { ComponentsModule } from '../../components/components.module';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-business',
  standalone: true,
  imports: [ComponentsModule,CommonModule],
  templateUrl: './business.component.html',
  styleUrl: './business.component.css'
})
export class BusinessComponent {

}
