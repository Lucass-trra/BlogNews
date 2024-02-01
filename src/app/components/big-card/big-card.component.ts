import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

//environments
import { defaultImageUrl, environment } from "../../../environments/environment.development";

import { CommonModule } from '@angular/common';
import { BigCard } from "../../../types";

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css', '../../pages/pages.responsive.css']
})
export class BigCardComponent implements OnChanges {
  
  @Input() bigCardInformations: BigCard = {
    img: '',
    category: '',
    publishedAt: '',
    title: '',
    description: '',
    link: ''
  };

  imageIbgeDomain:string = environment.ibgeImagesDomain
  imageCompleted:string = ""
  
  ngOnChanges(): void {
    if(this.bigCardInformations.img !== null) {
      this.imageCompleted = `${this.imageIbgeDomain}${this.bigCardInformations.img}`
    }else {
      this.imageCompleted = defaultImageUrl
    }
  }

  onImageError(event:any) {
    event.target.src = defaultImageUrl;
  }

}
