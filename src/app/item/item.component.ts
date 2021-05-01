import { Article } from '../article';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() article: Article;
  constructor() { }

  ngOnInit(): void {
  }

}
