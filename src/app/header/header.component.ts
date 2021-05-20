import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  event: string = 'Moisson 2021';
  event_description: string = 'Thème: Dieu d\'abord';
  community: string = 'Akwédo Israel';
  step: string = '2ème mini moisson';
  contacts: string = '0709933521';
  constructor() { }

  ngOnInit(): void {
  }

}
