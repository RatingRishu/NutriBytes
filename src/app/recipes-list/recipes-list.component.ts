import { Component } from '@angular/core';
import { NutriServiceService } from '../nutri-service.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent {
  ingredientFoodData : any = 'paneer'
  ingredientData : any = ['200 gram paneer','1 cup rice']

  foodData : any;
  foodItemData : any;

  query: string = ''; 



  constructor(private nutriService: NutriServiceService) {

    // this.nutriService.getNutriData(this.ingredientData).subscribe(data => {
    //   console.log(data);
    // });

    // this.nutriService.getFoodData(this.ingredientFoodData).subscribe(data => {
    //   this.foodData = data;
    //   console.log(this.foodData);
    //   this.foodItemData = this.foodData.parsed[0];
    //   console.log(this.foodItemData.label);
    // });
  }

  fetchFoodData(): void {
    if (this.query.trim()) { // Ensure the query is not empty
      this.nutriService.getFoodData(this.query).subscribe(data => {
        this.foodData = data;
      });
    }
  }
}
