import { Component } from '@angular/core';
import { NutriServiceService } from './nutri-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NutriBytes';
  // ingredientFoodData : any = 'paneer'
  // ingredientData : any = ['200 gram paneer','1 cup rice']

  // foodData : any;
  // foodItemData : any;




  // constructor(private nutriService: NutriServiceService) {

  //   this.nutriService.getNutriData(this.ingredientData).subscribe(data => {
  //     console.log(data);
  //   });

  //   this.nutriService.getFoodData(this.ingredientFoodData).subscribe(data => {
  //     this.foodData = data;
  //     console.log(this.foodData.parsed);
  //     this.foodItemData = this.foodData.parsed[0];
  //     console.log(this.foodItemData.label);
  //   });
  // }
}
