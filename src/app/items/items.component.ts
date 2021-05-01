import { ARTICLES } from './../mock-items';
import { Component, OnInit } from '@angular/core';

import { from } from 'rxjs';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  articles = ARTICLES;
  constructor() { }

  ngOnInit(): void {
  }

}
