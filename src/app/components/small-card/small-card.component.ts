import { Component, Input } from '@angular/core';

import { RouterModule } from '@angular/router';  
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent {
  @Input() id:number | string = 0
  @Input() link:string = ""
  @Input() image:string = ""
  @Input() title:string = ""
}
