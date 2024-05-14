import { Component } from '@angular/core';
import { NutriServiceService } from './nutri-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NutriBytes';
  ingredientData : string = 'potato'
  ingredientFoodData : any = ['200 gram paneer',
    '1 cup rice']


  constructor(private nutriService: NutriServiceService) {

    this.nutriService.getNutriData(this.ingredientData).subscribe(data => {
      console.log(data);
    });

    this.nutriService.getFoodData(this.ingredientFoodData).subscribe(data => {
      console.log(data);
    });
  }
}
