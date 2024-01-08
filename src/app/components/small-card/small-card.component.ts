import { Component, Input } from '@angular/core';

import { RouterModule } from '@angular/router';  
import { CommonModule } from '@angular/common';

//types
import { SmallCard } from "../../../types";

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent {

  @Input() smallCardInformations: SmallCard = {
    img:'',
    title: '',
    category:''
  }
}
