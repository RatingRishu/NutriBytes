import { Component } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent {
  value1 = 286;
  value2 = 328;
  value3 = 342;
  isLiked1 = false;
  isLiked2 = false;
  isLiked3 = false;
  increaseValue1() {
    // this.value1++;
    // this.isLiked1 = !this.isLiked1;
    // console.log(this.isLiked1)
    if (this.isLiked1) {
      this.value1--;
    } else {
      this.value1++;
    }
    this.isLiked1 = !this.isLiked1; 
  }

  
  increaseValue2() {
    // this.value2++;
    // this.isLiked2 = !this.isLiked2;
    // console.log(this.isLiked2)
    if (this.isLiked2) {
      this.value2--;
    } else {
      this.value2++;
    }
    this.isLiked2 = !this.isLiked2;
  }
  increaseValue3() {
    // this.value3++;
    // this.isLiked3 = !this.isLiked3;
    // console.log(this.isLiked3)
    if (this.isLiked3) {
      this.value3--;
    } else {
      this.value3++;
    }
    this.isLiked3 = !this.isLiked3;
  }

}
