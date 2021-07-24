import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
  public openedItemIndex: number = 0

@Input() items: Array<any> = []
  constructor() { }

  ngOnInit(): void {
  }
  setOpenIndex(index: number): void {
    if(index === this.openedItemIndex){
      this.openedItemIndex = -1
    }else{
      this.openedItemIndex = index
    }

  }

}
