import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../components/components.module';


@Component({
  selector: 'app-science',
  standalone: true,
  imports: [ComponentsModule,CommonModule],
  templateUrl: './science.component.html',
  styleUrl: './science.component.css'
})
export class ScienceComponent {

}
