import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

//components 
import { ComponentsModule } from "../../components/components.module";
import { SharedModule } from "../../shared/shared.module";

//service
import { PagesService } from '../../services/Pages.service';

//types
import { Article, ApiResponse} from "../../../types";
import { GlobalFunctions } from '../../../GlobalFunctions';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ComponentsModule,SharedModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['../pages.style.css', '../pages.responsive.css']
})

export class HomeComponent extends GlobalFunctions implements OnInit {
  category:string = "geral"

  showArticlesFiltred: boolean = true;
  articlesHomeFiltred: Article[] = []
  
  articlesVectorHome: Article[] = []

  constructor(private pageService:PagesService) {
    super();
  }

  async getHomeNews(qtd:number):Promise<void> {
    const newsHome:ApiResponse = await this.pageService.getIbgeNews(qtd);

    for (const articleHome of newsHome.items) {
      const articleHomeCompleted:Article| null = this.validateArticle(articleHome)
      
      if (articleHomeCompleted) {

        this.articlesVectorHome.push(articleHomeCompleted)

      }else {
        throw new Error("the article is null, please, visit the validateArticle in globalFunction.ts");
      }
    }
  }

  filterNews(notice:string) {
    if(notice.length === 0) {
      this.showArticlesFiltred = true

    }else {
      this.showArticlesFiltred = false

      this.articlesHomeFiltred = this.articlesVectorHome.filter((article) => article.titulo.toLowerCase().includes(notice.toLowerCase()))
    }
  }
  
  ngOnInit(): void {
    this.getHomeNews(20);
  }
}
