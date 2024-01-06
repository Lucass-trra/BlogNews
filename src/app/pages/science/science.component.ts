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
  selector: 'app-science',
  standalone: true,
  imports: [ComponentsModule,CommonModule],
  templateUrl: './science.component.html',
  styleUrl: './science.component.css'
})
export class ScienceComponent extends GlobalFunctions implements OnInit {
  category:string = "science"
  articlesVectorScience: Article[] = []

  constructor(private pagesService:PagesService) {
    super();
  }

  async getScienceNews():Promise<void> {
    const newsHome:ApiResponse = await this.pagesService.getScienceNews();

    for (const articleHome of newsHome.articles) {
      let articleValidatedHome:Article = this.fillNullNewsInformations(articleHome)

      articleValidatedHome.publishedAt = this.formatDateFromNotice(articleValidatedHome.publishedAt)

      articleValidatedHome.title = this.reducedTitle(articleValidatedHome.title)

      if (this.isEmptyNews(articleValidatedHome)) {
        this.articlesVectorScience.push(articleValidatedHome) 
      }
    }

    // console.log(this.articlesVectorHealth)
  }
  
  ngOnInit(): void {
    this.getScienceNews();
  }

}
