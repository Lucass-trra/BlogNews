import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent {
  @Input() id:number | string = 0
  @Input() img:string = ""
  @Input() category:string = ""
  @Input() publishedAt:string = ""
  @Input() title:string = ""
  @Input() description:string = ""

}
