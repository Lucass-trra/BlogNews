import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { ApiResponse, Article } from '../../types';
import { GlobalFunctions } from '../../GlobalFunctions';

@Injectable({
  providedIn: 'root'
})
export class PagesService extends GlobalFunctions{
  
  constructor() { 
    super();
  }

  async getIbgeNews(qtd: number): Promise<ApiResponse> {
    const homeUrl:string = `${environment.ibgeUrl}?qtd=${qtd}`
    const response = await fetch(homeUrl);
    return await response.json();
  }
}
