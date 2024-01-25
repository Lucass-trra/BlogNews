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
  selector: 'app-economia',
  standalone: true,
  imports: [ComponentsModule, SharedModule, CommonModule],
  templateUrl: './economicas.component.html',
  styleUrls: ['../pages.style.css', '../pages.responsive.css']
})

export class EconomiaComponent extends GlobalFunctions implements OnInit {
  category:string = "general"
  articlesVectorEconomia: Article[] = []

  showArticlesFiltred: boolean = true;
  articlesEconomiaFiltred: Article[] = []

  constructor(private pageService:PagesService) {
    super();
  }

  async getEconomiaNews(qtd:number):Promise<void> {
    const newsEconomia:ApiResponse = await this.pageService.getIbgeNews(qtd);

    const articlesEconomiaNews = newsEconomia.items.filter((article)=> article.editorias === "economicas")

    for (const articleEconomia of articlesEconomiaNews) {
      const articleEconomiaCompleted:Article| null = this.validateArticle(articleEconomia)
      
      if (articleEconomiaCompleted) {
        this.articlesVectorEconomia.push(articleEconomiaCompleted)

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

      this.articlesEconomiaFiltred = this.articlesVectorEconomia.filter((article) => article.titulo.toLowerCase().includes(notice.toLowerCase()))
    }
  }
  
  ngOnInit(): void {
    this.getEconomiaNews(100);
  }

}
