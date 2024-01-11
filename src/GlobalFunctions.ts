import { PagesService } from "./app/services/Pages.service";
import { apiKey, environment, defaultImageUrl } from "./environments/environment.development";
import { Article, pageUrlGroup } from "./types";

export abstract class  GlobalFunctions {
    constructor(
       
      ) 
    {}
  protected fillNullNewsInformations(article: Article): Article {
    const author = article.author !== null ? article.author : "unknown author";
    const content = article.content !== null ? article.content : "default content";
    const description = article.description !== null ? article.description : "default description";
    const publishedAt = article.publishedAt !== null ? article.publishedAt : "default date";
    const sourceId = article.source.id !== null ? article.source.id : "unknown Id";
    const sourceName = article.source.name !== null ? article.source.name : "default Name";
    const title = article.title !== "[Removed]" ? article.title : "unknown title";
    const url = article.url !== null ? article.url : "unknown url";
    const img = article.urlToImage !== null ? article.urlToImage :defaultImageUrl;
  
    article.author = author;
    article.content = content;
    article.description = description;
    article.publishedAt = publishedAt;
    article.source.id = sourceId;
    article.source.name = sourceName;
    article.title = title;
    article.url = url;
    article.urlToImage = img;
  
    return article;
  } 

  protected formatDateFromNotice(publishedAt:string):string {
    const dataFormated:string[] = publishedAt.split('T')
    return dataFormated[0]
  }

  protected reducedTitle(title:string):string {
    return `${title.substring(0, 50)}` 
  }

  protected isEmptyNews(article: Article): boolean {
    const isDefaultTitle = article.title === "unknown title";
    const isDefaultImage = article.urlToImage === defaultImageUrl;
  
    if (isDefaultTitle && isDefaultImage) {
      return false;
    } else {
      return true;
    }
  }

  protected getNoticeUrlByIdAndCategory(category:string,id:string):string {
    const noticeDetailsUrl: pageUrlGroup = {
      general: `${environment.homeUrl}&apiKey=${apiKey}&q=${id}`,
      business: `${environment.businessUlr}&apiKey=${apiKey}&q=${id}`,
      entertainment: `${environment.entertainmentUrl}&apiKey=${apiKey}&q=${id}`,
      health: `${environment.healthUrl}&apiKey=${apiKey}&q=${id}`,
      science: `${environment.scienceUrl}&apiKey=${apiKey}&q=${id}`,
      sports: `${environment.sportsUrl}&apiKey=${apiKey}&q=${id}`,
      technology: `${environment.technologyUrl}&apiKey=${apiKey}&q=${id}`,
    }
    
    return noticeDetailsUrl[category as keyof typeof noticeDetailsUrl];
  }
}