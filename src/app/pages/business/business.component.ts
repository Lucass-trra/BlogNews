import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

//components 
import { ComponentsModule } from "../../components/components.module";

//service
import { PagesService } from '../../services/Pages.service';
//types
import { Article, ApiResponse} from "../../../types";
import { GlobalFunctions } from '../../../GlobalFunctions';

@Component({
  selector: 'app-business',
  standalone: true,
  imports: [ComponentsModule,CommonModule],
  templateUrl: './business.component.html',
  styleUrl: './business.component.css'
})
export class BusinessComponent extends GlobalFunctions implements OnInit {
  category:string = "business"
  articlesVectorBusiness: Article[] = []

  constructor(private pagesService:PagesService) {
    super();
  }

  async getBusinessNews():Promise<void> {
    const newsHome:ApiResponse = await this.pagesService.getBusinessNews();

    for (const articleHome of newsHome.articles) {
      let articleValidatedHome:Article = this.fillNullNewsInformations(articleHome)

      articleValidatedHome.publishedAt = this.formatDateFromNotice(articleValidatedHome.publishedAt)

      articleValidatedHome.title = this.reducedTitle(articleValidatedHome.title)

      if (this.isEmptyNews(articleValidatedHome)) {
        this.articlesVectorBusiness.push(articleValidatedHome) 
      }
    }

    console.log(this.articlesVectorBusiness)
  }
  
  ngOnInit(): void {
    this.getBusinessNews();
  }
}
