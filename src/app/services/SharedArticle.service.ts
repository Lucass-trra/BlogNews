import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Article } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class SharedAticleService {
  private articleSubject = new BehaviorSubject<Article[]>([]);
  article$ = this.articleSubject.asObservable();

  addArticles(artigos: Article[]) {
    const artigosAtuais = this.articleSubject.getValue();
    this.articleSubject.next([...artigosAtuais, ...artigos]);
  }

  clearArticles() {
    this.articleSubject.next([]);
  }
}
