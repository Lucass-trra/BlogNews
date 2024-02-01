import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

//components 
import { ComponentsModule } from "../../components/components.module";
import { SharedModule } from "../../shared/shared.module";

//service
import { PagesService } from '../../services/Pages.service';
import { SharedAticleService } from '../../services/SharedArticle.service';

//types
import { Article, ApiResponse} from "../../../types";
import { GlobalFunctions } from '../../../GlobalFunctions';

@Component({
  selector: 'app-sociais',
  standalone: true,
  imports: [ComponentsModule, SharedModule,CommonModule],
  templateUrl: './sociais.component.html',
  styleUrls: ['../pages.style.css', '../pages.responsive.css']
})

export class SociaisComponent extends GlobalFunctions implements OnInit, OnDestroy {
  category:string = "sociais"
  articlesVectorSociais: Article[] = []

  showArticlesFiltred: boolean = true;
  articlesSociaisFiltred: Article[] = []

  searchConst:number = 200
  spliceConst:number = 100


  articleSubscription: Subscription = new Subscription;

  constructor(
    private pageService:PagesService,
    private sharedArticleService:SharedAticleService
    ) {
    super();
  }
  
  async getSociaisNews(qtd:number):Promise<void> {
    const newsSociais:ApiResponse = await this.pageService.getIbgeNews(qtd);

    const articlesSociaisNews = newsSociais.items.filter((article)=> article.editorias === "sociais")

    for (const articleSociais of articlesSociaisNews) {
      
      const articleSociaisCompleted:Article| null = this.validateArticle(articleSociais)
      
      if (articleSociaisCompleted) {
    
        this.articlesVectorSociais.push(articleSociaisCompleted)
        
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

      this.articlesSociaisFiltred = this.articlesVectorSociais.filter((article) => article.titulo.toLowerCase().includes(notice.toLowerCase()))
    }
  }
  ngOnInit(): void {
    this.getSociaisNews(100);
    
    this.articleSubscription = this.sharedArticleService.article$.subscribe(newArticles => {
      for (const article of newArticles) {
        if (!this.articlesVectorSociais.find(existingArticle => existingArticle.titulo === article.titulo)) {
          
          this.articlesVectorSociais.push(article);
        }
      }
    });

  }

  ngOnDestroy(): void {
    this.articleSubscription.unsubscribe()
    this.sharedArticleService.clearArticles()
  
  }
  
}
