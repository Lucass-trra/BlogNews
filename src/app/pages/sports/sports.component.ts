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
  selector: 'app-sports',
  standalone: true,
  imports: [ComponentsModule,CommonModule],
  templateUrl: './sports.component.html',
  styleUrls: ['../pages.style.css', '../pages.responsive.css']
})
export class SportsComponent extends GlobalFunctions implements OnInit{
  category:string = "Sports"
  articlesVectorSports: Article[] = []

  constructor(private pagesService:PagesService) {
    super();
  }

  async getSportsNews():Promise<void> {
    const newsHome:ApiResponse = await this.pagesService.getSportsNews();

    for (const articleHome of newsHome.articles) {
      let articleValidatedHome:Article = this.fillNullNewsInformations(articleHome)

      articleValidatedHome.publishedAt = this.formatDateFromNotice(articleValidatedHome.publishedAt)

      articleValidatedHome.title = this.reducedTitle(articleValidatedHome.title)

      if (this.isEmptyNews(articleValidatedHome)) {
        this.articlesVectorSports.push(articleValidatedHome) 
      }
    }

    // console.log(this.articlesVectorHealth)
  }
  
  ngOnInit(): void {
    this.getSportsNews();
  }
}
