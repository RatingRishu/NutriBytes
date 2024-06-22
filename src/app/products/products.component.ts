import { Component, Input } from '@angular/core';
import { NutriServiceService } from '../nutri-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  ingredientFoodData : any = 'paneer'
  ingredientData : any = ['200 gram paneer','1 cup rice']

  foodData : any;
  foodItemData : any;
  query: string = ''; 
  paneer: string = 'paneer';
  rice: string = 'rice';
  potatoChips: string = 'potato chips';
  eggs: string = 'eggs';
  showCard : boolean = true;


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

  // fetchFoodData(): void {
  //   if (this.query.trim()) { // Ensure the query is not empty
  //     this.nutriService.getFoodData(this.query).subscribe(data => {
  //       this.foodData = data;
  //     });
  //   }
  // }

  onView(item:any) {
    this.foodItemData = item;
    this.showCard = false;
    console.log(this.foodItemData);
  }

  backToMenu() {
    this.showCard = true;
  }

}

