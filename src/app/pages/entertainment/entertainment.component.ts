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
  selector: 'app-entertainment',
  standalone: true,
  imports: [ComponentsModule,CommonModule],
  templateUrl: './entertainment.component.html',
  styleUrl: './entertainment.component.css'
})
export class EntertainmentComponent extends GlobalFunctions implements OnInit{
  category:string = "entertainment"
  articlesVectorEntertainment: Article[] = []

  constructor(private pagesService:PagesService) {
    super();
  }

  async getEntertainmentNews():Promise<void> {
    const newsHome:ApiResponse = await this.pagesService.getEntertainmentNews();

    for (const articleHome of newsHome.articles) {
      let articleValidatedHome:Article = this.fillNullNewsInformations(articleHome)

      articleValidatedHome.publishedAt = this.formatDateFromNotice(articleValidatedHome.publishedAt)

      articleValidatedHome.title = this.reducedTitle(articleValidatedHome.title)

      if (this.isEmptyNews(articleValidatedHome)) {
        this.articlesVectorEntertainment.push(articleValidatedHome) 
      }
    }

    // console.log(this.articlesVectorEntertainment)
  }
  
  ngOnInit(): void {
    this.getEntertainmentNews();
  }
}
