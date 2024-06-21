import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
// import Chart from 'chart.js/auto';
@Component({
  selector: 'app-details-popup',
  templateUrl: './details-popup.component.html',
  styleUrls: ['./details-popup.component.css']
})
export class DetailsPopupComponent {
  @Input() isVisible: boolean = false;
  @Output() isVisibleChange = new EventEmitter<boolean>();
  @Input() foodItem: any;
  // @ViewChild('nutritionChart', { static: false }) chartRef!: ElementRef;
    // chart: any;

//   ngOnInit(): void {
//     console.log(this.foodItem)
//     this.renderChart();
// }

// renderChart(): void {
//     const ctx = this.chartRef.nativeElement.getContext('2d');
//     this.chart = new Chart(ctx, {
//         type: 'bar',
//         data: {
//             labels: ['Calories', 'Protein', 'Fat', 'Carbs', 'Fiber'],
//             datasets: [{
//                 label: 'Nutrient Values',
//                 data: [
//                     this.foodItem.food.nutrients.ENERC_KCAL,
//                     this.foodItem.food.nutrients.PROCNT,
//                     this.foodItem.food.nutrients.FAT,
//                     this.foodItem.food.nutrients.CHOCDF,
//                     this.foodItem.food.nutrients.FIBTG
//                 ],
//                 backgroundColor: [
//                     'rgba(255, 99, 132, 0.2)',
//                     'rgba(54, 162, 235, 0.2)',
//                     'rgba(255, 206, 86, 0.2)',
//                     'rgba(75, 192, 192, 0.2)',
//                     'rgba(153, 102, 255, 0.2)'
//                 ],
//                 borderColor: [
//                     'rgba(255, 99, 132, 1)',
//                     'rgba(54, 162, 235, 1)',
//                     'rgba(255, 206, 86, 1)',
//                     'rgba(75, 192, 192, 1)',
//                     'rgba(153, 102, 255, 1)'
//                 ],
//                 borderWidth: 1
//             }]
//         },
//         options: {
//             scales: {
//                 y: {
//                     beginAtZero: true
//                 }
//             }
//         }
//     });
// }
  closePopup() {
    this.isVisible = false;
    this.isVisibleChange.emit(this.isVisible);
  }
}
