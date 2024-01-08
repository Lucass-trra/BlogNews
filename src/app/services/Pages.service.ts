import { Injectable } from '@angular/core';
import { environment,apiKey } from '../../environments/environment.development';
import { ApiResponse, pageUrlGroup } from '../../types';
import { GlobalFunctions } from '../../GlobalFunctions';


@Injectable({
  providedIn: 'root'
})
export class PagesService extends GlobalFunctions{
  
  constructor() { 
    super();
  }

  async getHomeNews(): Promise<ApiResponse> {
    // debugger;
    const homeUrl:string = `${environment.homeUrl}&apiKey=${apiKey}`
    const response = await fetch(homeUrl);
    return await response.json();
  }
  
  async getBusinessNews(): Promise<ApiResponse> {
    // debugger;
    const businessUrl:string = `${environment.businessUlr}&apiKey=${apiKey}`
    const response = await fetch(businessUrl);
    return await response.json();
  }

  async getEntertainmentNews(): Promise<ApiResponse> {
    // debugger;
    const entertainmentUrl:string = `${environment.entertainmentUrl}&apiKey=${apiKey}`
    const response = await fetch(entertainmentUrl);
    return await response.json();
  }

  async getHealthNews(): Promise<ApiResponse> {
    // debugger;
    const healthUrl:string = `${environment.healthUrl}&apiKey=${apiKey}`
    const response = await fetch(healthUrl);
    return await response.json();
  }

  async getScienceNews(): Promise<ApiResponse> {
    // debugger;
    const scienceUrl:string = `${environment.scienceUrl}&apiKey=${apiKey}`
    const response = await fetch(scienceUrl);
    return await response.json();
  }

  async getSportsNews(): Promise<ApiResponse> {
    // debugger;
    const sportsUrl:string = `${environment.sportsUrl}&apiKey=${apiKey}`
    const response = await fetch(sportsUrl);
    return await response.json();
  }

  async getTechnologyNews(): Promise<ApiResponse> {
    // debugger;
    const technologyUrl:string = `${environment.technologyUrl}&apiKey=${apiKey}`
    const response = await fetch(technologyUrl);
    return await response.json();
  }

  async getNoticeDetail(category: string, id: string): Promise<ApiResponse> {    
    const urlSelected: string = this.getNoticeUrlByIdAndCategory(category,id)

    const response = await fetch(urlSelected)
    return response.json()

  }
  
}
