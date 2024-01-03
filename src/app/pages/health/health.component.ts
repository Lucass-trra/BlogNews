import { Component } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';

import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-health',
  standalone: true,
  imports: [ComponentsModule,CommonModule],
  templateUrl: './health.component.html',
  styleUrl: './health.component.css'
})
export class HealthComponent {

}
