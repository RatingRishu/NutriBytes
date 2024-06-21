import { Component, Input, OnChanges, OnInit, SimpleChanges, AfterViewInit } from '@angular/core';
import { NutriServiceService } from '../nutri-service.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit, OnChanges {
  ingredientFoodData: any = 'paneer'
  ingredientData: any = ['200 gram paneer', '1 cup rice']

  foodData: any;
  foodItemData: any;
  query: string = '';
  name: string = '';
  img: string = '';
  isPopupVisible = false;
  selectedFoodItem: any;

  @Input() item: string = '';

  constructor(private nutriService: NutriServiceService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['item'] && changes['item'].currentValue) {
      this.query = this.item;

      this.fetchFoodData();

    }
  }
  ngOnInit(): void {
  }

  togglePopup(item: any) {
    this.selectedFoodItem = item;
    this.isPopupVisible = !this.isPopupVisible;
  }

  fetchFoodData(): void {
    if (this.query.trim()) { // Ensure the query is not empty
      this.nutriService.getFoodData(this.query).subscribe(data => {
        this.foodData = data;
      });
    }
  }
}