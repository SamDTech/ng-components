import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {
public modalOpen = false

  public items: Array<any> = [
    {title: 'Why is this sky blue', content: 'The sky is blue because it is'},
    {title: 'What does an orange taste like', content: 'An Orange taste like an orange'},
    {title: 'What color is the cat', content: 'The cat is an orange color'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

 public onShow(){
this.modalOpen = !this.modalOpen
  }

}
