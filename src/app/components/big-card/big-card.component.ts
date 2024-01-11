import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';

//types
import { BigCard } from "../../../types";

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css', '../../pages/pages.responsive.css']
})
export class BigCardComponent {
  @Input() bigCardInformations:BigCard = {
    img: '',
    category: '',
    publishedAt: '',
    title: '',
    description: ''
  }

}
