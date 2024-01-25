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
  selector: 'app-geociencias',
  standalone: true,
  imports: [ComponentsModule,SharedModule, CommonModule],
  templateUrl: './geociencias.component.html',
  styleUrls: ['../pages.style.css', '../pages.responsive.css']
})

export class GeocienciasComponent extends GlobalFunctions implements OnInit {
  category:string = "geociências"
  articlesVectorGeociencias: Article[] = []

  showArticlesFiltred: boolean = true;
  articlesGeocienciaFiltred: Article[] = []

  constructor(private pageService:PagesService) {
    super();
  }
  
  async getGeocienciasNews(qtd:number):Promise<void> {
    const newsGeociencias:ApiResponse = await this.pageService.getIbgeNews(qtd);

    const articlesGeocienciasNews = newsGeociencias.items.filter((article)=> article.editorias === "geociencias")
    
    for (const articleGeociencias of articlesGeocienciasNews) {
      const articleGeocienciasCompleted:Article| null = this.validateArticle(articleGeociencias)
      
      if (articleGeocienciasCompleted) {
        this.articlesVectorGeociencias.push(articleGeocienciasCompleted)
        
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

      this.articlesGeocienciaFiltred = this.articlesVectorGeociencias.filter((article) => article.titulo.toLowerCase().includes(notice.toLowerCase()))
    }
  }

  ngOnInit(): void {
    this.getGeocienciasNews(500);
  }

}
