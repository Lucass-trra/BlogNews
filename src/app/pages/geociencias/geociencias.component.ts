import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

//components 
import { ComponentsModule } from "../../components/components.module";
import { SharedModule } from "../../shared/shared.module";
import { Subscription } from 'rxjs';

//service
import { PagesService } from '../../services/Pages.service';
import { SharedAticleService } from '../../services/SharedArticle.service';

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

export class GeocienciasComponent extends GlobalFunctions implements OnInit, OnDestroy {
  category:string = "geociencias"
  articlesVectorGeociencias: Article[] = []

  showArticlesFiltred: boolean = true;
  articlesGeocienciaFiltred: Article[] = []

  searchConst:number = 2000
  spliceConst:number = 1000

  articleSubscription: Subscription = new Subscription;

  constructor(
    private pageService:PagesService,
    private sharedArticleService: SharedAticleService
    ) {
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
    this.getGeocienciasNews(1000);

    this.articleSubscription = this.sharedArticleService.article$.subscribe(newArticles => {
      for (const article of newArticles) {
        if (!this.articlesVectorGeociencias.find(existingArticle => existingArticle.titulo === article.titulo)) {

          this.articlesVectorGeociencias.push(article);
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.articleSubscription.unsubscribe();
    this.sharedArticleService.clearArticles()
  }
  
}
