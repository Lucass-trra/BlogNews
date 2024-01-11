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
  selector: 'app-home',
  standalone: true,
  imports: [ComponentsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['../pages.style.css', '../pages.responsive.css']
})

export class HomeComponent extends GlobalFunctions implements OnInit {
  category:string = "general"
  articlesVectorHome: Article[] = []

  constructor(private pagesService:PagesService) {
    super();
  }

  async getHomeNews():Promise<void> {
    const newsHome:ApiResponse = await this.pagesService.getHomeNews();

    for (const articleHome of newsHome.articles) {
      let articleValidatedHome:Article = this.fillNullNewsInformations(articleHome)

      articleValidatedHome.publishedAt = this.formatDateFromNotice(articleValidatedHome.publishedAt)

      articleValidatedHome.title = this.reducedTitle(articleValidatedHome.title)

      if (this.isEmptyNews(articleValidatedHome)) {
        this.articlesVectorHome.push(articleValidatedHome) 
      }
    }

    // console.log(this.articlesVectorHome)
  }
  
  ngOnInit(): void {
    this.getHomeNews();
  }
}
