import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

//environments
import { environment } from "../../../environments/environment.development";

import { CommonModule } from '@angular/common';
import { BigCard } from "../../../types";

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css', '../../pages/pages.responsive.css']
})
export class BigCardComponent implements OnInit,OnChanges {
  
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


  ngOnInit(): void {
    this.imageCompleted = `${this.imageIbgeDomain}${this.bigCardInformations.img}`
    console.log(this.imageCompleted)
  }
  
  ngOnChanges(): void {
    this.imageCompleted = `${this.imageIbgeDomain}${this.bigCardInformations.img}`
    console.log(this.imageCompleted)
  }

}
