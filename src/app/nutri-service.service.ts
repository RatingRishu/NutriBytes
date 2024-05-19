import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NutriServiceService {

  // Nutrition analysis api details
  nutriAppId = '8180ba89'
  nutriAppKey = 'dd30b960687f4723a19afb953491550b'
  nutriType = 'cooking'
  // nutriType = 'logging'
  // ingredient = 'rice'

  // Food analysis api details
  foodAppId = '223ab6f0'
  foodAppKey = '12e8959e60d259eb2dd445258c4792ed'


  
  
  constructor(private http: HttpClient) { }

  getNutriData(ingredient: string) {
    return this.http.get(`https://api.edamam.com/api/nutrition-data?app_id=${this.nutriAppId}&app_key=${this.nutriAppKey}&nutrition-type=${this.nutriType}&ingr=${ingredient}`);
  }

  getFoodData(ingredient: string) {
    return this.http.get(`https://api.edamam.com/api/food-database/v2/parser?app_id=${this.foodAppId}&app_key=${this.foodAppKey}&ingr=${ingredient}&nutrition-type=${this.nutriType}`);
  }

  // getWeatherDefault() {
  //   return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=${this.apiKey}&units=metric`);
  
  // }
}
