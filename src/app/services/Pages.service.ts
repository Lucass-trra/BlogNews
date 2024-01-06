import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class PagesService {
  
  constructor() { }

  async getHomeNews(): Promise<any> {
    // debugger;
    const response = await fetch(environment.homeUrl);
    return await response.json();
  }
  
}
