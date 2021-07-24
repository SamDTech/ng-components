import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {
public stats = [
  {
    value:22, label: '# of users'
  },
  {
    value: 900, label: 'Revenue'
  },
  {
    value:50, label: 'Reviews'
  }
]

  public items: any[] = [{
  image: 'assets/comps-image/couch.jpeg',
  title: 'Couch',
    description: 'This is a fantastic couch to sit on'
  },
    {
      image: 'assets/comps-image/dresser.jpeg',
      title: 'Dresser',
      description: 'This is a great dresser to stuff in'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
