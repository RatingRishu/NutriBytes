import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-details-popup',
  templateUrl: './details-popup.component.html',
  styleUrls: ['./details-popup.component.css']
})
export class DetailsPopupComponent {
  @Input() isVisible: boolean = false;
  @Output() isVisibleChange = new EventEmitter<boolean>();
  @Input() foodItem: any;


  closePopup() {
    this.isVisible = false;
    this.isVisibleChange.emit(this.isVisible);
  }
}
