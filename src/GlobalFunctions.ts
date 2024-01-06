import { PagesService } from "./app/services/Pages.service";
import { ApiResponse, Article} from "./types";

export abstract class  GlobalFunctions {
    constructor(
       
      ) 
    {}
  protected fillNullNewsInformations(article: Article): Article {
    const author = article.author !== null ? article.author : "default author";
    const content = article.content !== null ? article.content : "default content";
    const description = article.description !== null ? article.description : "default description";
    const publishedAt = article.publishedAt !== null ? article.publishedAt : "default date";
    const sourceId = article.source.id !== null ? article.source.id : "default Id";
    const sourceName = article.source.name !== null ? article.source.name : "default Name";
    const title = article.title !== "[Removed]" ? article.title : "default title";
    const url = article.url !== null ? article.url : "default url";
    const img = article.urlToImage !== null ? article.urlToImage : "https://www.eclosio.ong/wp-content/uploads/2018/08/default.png";
  
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
    return `${title.substring(0, 50)}...` 
  }

  protected isEmptyNews(article: Article): boolean {
    const isDefaultTitle = article.title === "default title...";
    const isDefaultImage = article.urlToImage === "https://www.eclosio.ong/wp-content/uploads/2018/08/default.png";
  
    if (isDefaultTitle && isDefaultImage) {
      return false;
    } else {
      return true;
    }
  }
  



}