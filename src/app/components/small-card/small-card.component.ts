import { Component, Input, OnChanges, OnInit } from '@angular/core';

import { RouterModule } from '@angular/router';  
import { CommonModule } from '@angular/common';

//environments
import { defaultImageUrl, environment } from "../../../environments/environment.development";
//types
import { SmallCard } from "../../../types";


@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css', '../../pages/pages.responsive.css']
})
export class SmallCardComponent implements OnChanges {
  
  @Input() smallCardInformations: SmallCard = {
    img: '',
    title: '',
    category: '',
    link: ''
  }
  
  imageIbgeDomain:string = environment.ibgeImagesDomain
  imageCompleted:string = ""

  ngOnChanges(): void {
    if(this.smallCardInformations.img !== defaultImageUrl) {
      this.imageCompleted = `${this.imageIbgeDomain}${this.smallCardInformations.img}`

    }else {
      this.imageCompleted = defaultImageUrl
    }
  }

  onImageError(event:any) {
    event.target.src = defaultImageUrl;
  }

}
