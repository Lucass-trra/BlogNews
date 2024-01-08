import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiResponse, Article } from '../../../types';
import { PagesService } from '../../services/Pages.service';
import { GlobalFunctions } from '../../../GlobalFunctions';


@Component({
  selector: 'app-content-details',
  standalone: true,
  imports: [],
  templateUrl: './content-details.component.html',
  styleUrl: './content-details.component.css'
})
export class ContentDetailsComponent extends GlobalFunctions implements OnInit {
  constructor(
    private route:ActivatedRoute,
    private pageService: PagesService
    ) {
      super();
    }
    
    id:string | null= ""
    category:string |null = ""

    noticeDetail: Article = {
      author: "",
      content: "",
      description:"",
      publishedAt:"",
      source: { 
          id: "",
          name: "",
      },
      title:"",
      url:"",
      urlToImage:""
    }
  
  async getNoticeDetail() {
    if (this.id && this.category) {
      const apiResponse:ApiResponse = await this.pageService.getNoticeDetail(this.category, this.id)

      const articleValidated:Article =  this.fillNullNewsInformations(apiResponse.articles[0])

      articleValidated.publishedAt = this.formatDateFromNotice(articleValidated.publishedAt)

      this.noticeDetail = articleValidated
      console.log(articleValidated)
      
    }else {
      throw new Error("the id is undefined or null");
    }
  }

  
  ngOnInit(): void {
    this.route.paramMap.subscribe(value => {
      this.id = value.get("id")
      this.category = value.get("category")
    })

    this.getNoticeDetail()
  }

}
