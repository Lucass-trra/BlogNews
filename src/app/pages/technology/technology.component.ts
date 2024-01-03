import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';



@Component({
  selector: 'app-technology',
  standalone: true,
  imports: [ComponentsModule,CommonModule],
  templateUrl: './technology.component.html',
  styleUrl: './technology.component.css'
})
export class TechnologyComponent {

}
