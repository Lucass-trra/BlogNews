import { Component, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

//types
import { ApiResponse, Article } from '../../../types';

//services
import { GlobalFunctions } from '../../../GlobalFunctions';
import { PagesService } from '../../services/Pages.service';
import { SharedAticleService } from '../../services/SharedArticle.service';

@Component({
  selector: 'app-button-more-articles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button-more-articles.component.html',
  styleUrl: './button-more-articles.component.css'
})
export class ButtonMoreArticlesComponent extends GlobalFunctions implements OnChanges,OnDestroy{
  @Input() category:string = ""

  @Input() qtdToSearchConst:number = 0
  @Input() qtdToSpliceConst: number = 0 
  
  qtdToSearchCopy: number = 0
  qtdToSpliceCopy: number = 0
  
  ArticlesAddedByButton: Article[] = []
  buttonText:string = ""
  
  constructor(
    private pageService: PagesService,
    private sharedArticle: SharedAticleService
    ) {
      super();
    }
    
  ngOnChanges(): void {
    this.buttonText = `more ${this.category}`

    this.qtdToSearchCopy = this.qtdToSearchConst
    this.qtdToSpliceCopy = this.qtdToSpliceConst
  }

  async addMoreArticles() {
    try {
      debugger
      const ibgeResponse: ApiResponse = await this.pageService.getIbgeNews(this.qtdToSearchCopy)

      if (ibgeResponse) {
        const articlesSpliced: Article[] = ibgeResponse.items.splice(this.qtdToSpliceCopy)
        
        if (this.category === "home") {
          for (const a of articlesSpliced) {
            const articleValidated: Article |null = this.validateArticle(a)

            if(articleValidated) {
              this.ArticlesAddedByButton.push(articleValidated);
            }
          }

        } else {
          const articlesFiltered: Article[] = articlesSpliced.filter(a => a.editorias === this.category);

          for (const a of articlesFiltered) {
            const articleValidated: Article |null = this.validateArticle(a)

            if(articleValidated) {
              this.ArticlesAddedByButton.push(articleValidated);
            }
          }

        }
        
        this.sharedArticle.addArticles(this.ArticlesAddedByButton)

        this.qtdToSearchCopy += this.qtdToSpliceConst
        this.qtdToSpliceCopy += this.qtdToSpliceConst

      } else {
        throw new Error("the data of ibge API was not arrived");
      }
    } catch (error) {
      console.error("An error occurred while fetching more articles:", error);
    }
  }
  
  ngOnDestroy(): void {
    this.ArticlesAddedByButton = []
  }
  
  
}
