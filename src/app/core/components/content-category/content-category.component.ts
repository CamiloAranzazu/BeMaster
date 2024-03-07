import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface Category {
  styleImg: string;
  name: string;
  img: string;
}

@Component({
  selector: 'app-content-category',
  templateUrl: './content-category.component.html',
  styleUrls: ['./content-category.component.scss']
})
export class ContentCategoryComponent implements OnInit {

  @Input() category: any;

  @Output() _clickCategory = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  clickOpc1(){
    this._clickCategory.emit(this.category);
  }

}
