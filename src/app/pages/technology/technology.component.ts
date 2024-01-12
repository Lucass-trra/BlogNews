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
  selector: 'app-technology',
  standalone: true,
  imports: [ComponentsModule,CommonModule],
  templateUrl: './technology.component.html',
  styleUrls: ['../pages.style.css', '../pages.responsive.css']
})
export class TechnologyComponent extends GlobalFunctions implements OnInit{
  category:string = "technology"
  articlesVectortechnology: Article[] = []

  constructor(private pagesService:PagesService) {
    super();
  }

  async getTechnologyNews():Promise<void> {
    const newsHome:ApiResponse = await this.pagesService.getTechnologyNews();

    for (const articleHome of newsHome.articles) {
      let articleValidatedHome:Article = this.fillNullNewsInformations(articleHome)

      articleValidatedHome.publishedAt = this.formatDateFromNotice(articleValidatedHome.publishedAt)

      articleValidatedHome.title = this.reducedTitle(articleValidatedHome.title)

      if (this.isEmptyNews(articleValidatedHome)) {
        this.articlesVectortechnology.push(articleValidatedHome) 
      }
    }
  }
  
  ngOnInit(): void {
    this.getTechnologyNews();
  }
}
