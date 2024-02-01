import { defaultImageUrl } from "./environments/environment.development";
import { Article, ImagesObject, ImageNew} from "./types";

export abstract class  GlobalFunctions {
    constructor(
      ) 
    {}

  protected validateArticle(article:Article):Article | null {

      let articleValidated:Article = this.fillNullNewsInformations(article)

      const articleDateInformations:string[] = this.formatDateFromNotice(articleValidated.data_publicacao)
      articleValidated.data_publicacao = articleDateInformations[0]
      articleValidated.timePublication = articleDateInformations[1]

      articleValidated.titulo = `${this.reducedTitle(articleValidated.titulo)}...`

     

      if (this.isEmptyNews(articleValidated)) {              
        return articleValidated
      }
      return null
    }
  
  protected fillNullNewsInformations(article: Article): Article {
    const publishedAt = article.data_publicacao !== null ? article.data_publicacao : "unknown publised date";

    const emphasis = article.destaque !== null ? article.destaque : false;

    const editorias = article.editorias !== null ? article.editorias : "unknown editoria";

    const article_id = article.id !== null ? article.id : 0;
    
    const imagesJson:ImageNew = this.converImageStringToJSON(article.imagens)
    const home = imagesJson.home !== "" ? imagesJson.home : defaultImageUrl;
    const thumb = imagesJson.thumb !== "" ? imagesJson.thumb : defaultImageUrl;
    
    const indroduction = article.indroducao !== null ? article.indroducao : "unknown indroduction";
    
    const url = article.link !== null ? article.link : "unknown link to notice";
    
    const product_id = article.produto_id !== null ? article.produto_id : "unknown product id";

    const products = article.produtos !== null ? article.produtos : "no products for this article";

    const relational_products = article.produtos_relacionados !== null ? article.produtos_relacionados : "no products for this article";

    const type = article.tipo !== null ? article.tipo : "notice without type";

    const title = article.titulo !== null ? article.titulo : "no title for this article";
    
    article.data_publicacao = publishedAt;
    article.destaque = emphasis;
    article.editorias = editorias;
    article.id = article_id;
    article.imageHome = home
    article.imageThumb = thumb
    article.indroducao = indroduction;
    article.link = url;
    article.produto_id = product_id;
    article.produtos = products;
    article.produtos_relacionados = relational_products;
    article.tipo = type;
    article.titulo = title;
  
    return article;
  } 

  protected formatDateFromNotice(publishedAt:string):string[] {
    const dataFormated:string[] = publishedAt.split(' ')
    return dataFormated
  }

  protected reducedTitle(title:string):string {
    return `${title.substring(0, 70)}` 
  }

  protected converImageStringToJSON(imagesJSON:string):ImageNew {
    const imagesObject: ImagesObject = JSON.parse(imagesJSON)

    imagesObject.image_intro = imagesObject.image_intro.replace(/\\/g, '');
    imagesObject.image_fulltext = imagesObject.image_fulltext.replace(/\\/g, '');

    const newImageObject:ImageNew = {
      home: imagesObject.image_fulltext,
      thumb: imagesObject.image_intro
    }

    return newImageObject
  }

  protected isEmptyNews(article: Article): boolean {
    const isDefaultTitle = article.titulo === "no title for this article";
    const isDefaultImage = article.imagens === defaultImageUrl;
  
    if (isDefaultTitle && isDefaultImage) {
      return false;
    } else {
      return true;
    }
  }



}

