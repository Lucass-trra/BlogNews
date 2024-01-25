import { Component, Input, OnChanges, OnInit } from '@angular/core';

import { RouterModule } from '@angular/router';  
import { CommonModule } from '@angular/common';

//environments
import { environment } from "../../../environments/environment.development";
//types
import { SmallCard } from "../../../types";


@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css', '../../pages/pages.responsive.css']
})
export class SmallCardComponent implements OnInit {
  
  @Input() smallCardInformations: SmallCard = {
    img: '',
    title: '',
    category: '',
    link: ''
  }
  
  imageIbgeDomain:string = environment.ibgeImagesDomain
  imageCompleted:string = ""

  ngOnInit(): void {
    this.imageCompleted = `${this.imageIbgeDomain}${this.smallCardInformations.img}`
  }

  ngOnChanges(): void {
    this.imageCompleted = `${this.imageIbgeDomain}${this.smallCardInformations.img}`
  }

}
