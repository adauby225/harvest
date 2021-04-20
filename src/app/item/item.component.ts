import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  name : String = "Nothing";
  price : number = 100;
  quantity : number = 3000;
  constructor() { }

  ngOnInit(): void {
  }

}
