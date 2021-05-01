import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  event: string = 'Moisson 2021';
  event_description: string ='Fete annuelle des moissons organise par l\'Eglise Methodiste Unie Cote d\'Ivoire ';
  community: string = 'Par Akwedo Israel';
  step: string = '2eme mini moisson';
  constructor() { }

  ngOnInit(): void {
  }

}
