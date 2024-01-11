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
  selector: 'app-health',
  standalone: true,
  imports: [ComponentsModule,CommonModule],
  templateUrl: './health.component.html',
  styleUrls: ['../pages.style.css', '../pages.responsive.css']
})
export class HealthComponent extends GlobalFunctions implements OnInit {
  category:string = "health"
  articlesVectorHealth: Article[] = []

  constructor(private pagesService:PagesService) {
    super();
  }

  async getHealthNews():Promise<void> {
    const newsHome:ApiResponse = await this.pagesService.getHealthNews();

    for (const articleHome of newsHome.articles) {
      let articleValidatedHome:Article = this.fillNullNewsInformations(articleHome)

      articleValidatedHome.publishedAt = this.formatDateFromNotice(articleValidatedHome.publishedAt)

      articleValidatedHome.title = this.reducedTitle(articleValidatedHome.title)

      if (this.isEmptyNews(articleValidatedHome)) {
        this.articlesVectorHealth.push(articleValidatedHome) 
      }
    }

    // console.log(this.articlesVectorHealth)
  }
  
  ngOnInit(): void {
    this.getHealthNews();
  }
}
