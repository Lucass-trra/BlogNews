import { Injectable } from '@angular/core';
import { environment,apiKey } from '../../environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class PagesService {
  
  constructor() { }

  async getHomeNews(): Promise<any> {
    // debugger;
    const homeUrl:string = `${environment.homeUrl}&apiKey=${apiKey}`
    const response = await fetch(homeUrl);
    return await response.json();
  }
  
  async getBusinessNews(): Promise<any> {
    // debugger;
    const businessUrl:string = `${environment.businessUlr}&apiKey=${apiKey}`
    const response = await fetch(businessUrl);
    return await response.json();
  }

  async getEntertainmentNews(): Promise<any> {
    // debugger;
    const entertainmentUrl:string = `${environment.entertainmentUrl}&apiKey=${apiKey}`
    const response = await fetch(entertainmentUrl);
    return await response.json();
  }

  async getHealthNews(): Promise<any> {
    // debugger;
    const healthUrl:string = `${environment.healthUrl}&apiKey=${apiKey}`
    const response = await fetch(healthUrl);
    return await response.json();
  }

  async getScienceNews(): Promise<any> {
    // debugger;
    const scienceUrl:string = `${environment.scienceUrl}&apiKey=${apiKey}`
    const response = await fetch(scienceUrl);
    return await response.json();
  }

  async getSportsNews(): Promise<any> {
    // debugger;
    const sportsUrl:string = `${environment.sportsUrl}&apiKey=${apiKey}`
    const response = await fetch(sportsUrl);
    return await response.json();
  }

  async getTechnologyNews(): Promise<any> {
    // debugger;
    const technologyUrl:string = `${environment.technologyUrl}&apiKey=${apiKey}`
    const response = await fetch(technologyUrl);
    return await response.json();
  }
}
