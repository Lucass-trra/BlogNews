import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
  import { Subscription } from 'rxjs';

//components 
import { ComponentsModule } from "../../components/components.module";
import { SharedModule } from "../../shared/shared.module";

//service
import { PagesService } from '../../services/Pages.service';
import { SharedAticleService } from "../../services/SharedArticle.service";

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

export class HomeComponent extends GlobalFunctions implements OnInit, OnDestroy {
  category:string = "home"

  showArticlesFiltred: boolean = true;
  articlesHomeFiltred: Article[] = []

  searchConst:number = 200
  spliceConst:number = 100


  articlesVectorHome: Article[] = [];
  articleSubscription: Subscription = new Subscription;
  
  
  constructor(
    private pageService:PagesService,
    private sharedArticleService: SharedAticleService
    ) {
    super();
  }

  async getHomeNews(qtd:number):Promise<Article[] | null> {

    const newsHome:ApiResponse | undefined = await this.pageService.getIbgeNews(qtd);

    if(newsHome) {
      for (const articleHome of newsHome.items) {
        const articleHomeCompleted:Article| null = this.validateArticle(articleHome)
        
        if (articleHomeCompleted) {
          this.articlesVectorHome.push(articleHomeCompleted)
  
        }else {
          throw new Error("the article is null, please, visit the validateArticle in globalFunction.ts");
        }
      }

      return this.articlesVectorHome
    }

    return null
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
    this.getHomeNews(100);
    
    this.articleSubscription = this.sharedArticleService.article$.subscribe(newArticles => {
      for (const article of newArticles) {
        if (!this.articlesVectorHome.find(existingArticle => existingArticle.titulo === article.titulo)) {

          this.articlesVectorHome.push(article);
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.articleSubscription.unsubscribe();
    this.sharedArticleService.clearArticles()
  }
}
