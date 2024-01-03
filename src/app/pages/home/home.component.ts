import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

//components 
import { ComponentsModule } from "../../components/components.module";
//service
import { HomeService } from '../../services/home.service';
//types
import { Article,ApiResponse } from "../../../types";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ComponentsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  articlesVectorHome:Article[] = []
  
  constructor(private dataHome: HomeService) {}

  async showHomeInformations() {
    try {
      const homeNews:ApiResponse = await this.dataHome.getHomeNews();

      for (const article of homeNews.articles) {
        this.articlesVectorHome.push(article) 
      }

    } catch (error) {
      console.error('Erro ao obter notícias da API:', error);
    }
  }

  ngOnInit(): void {
    this.showHomeInformations();
  }
}
