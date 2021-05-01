import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Moisson 2021';
  description: string = 'Liste des articles de la deuxieme mini moisson';
  constructor() { }

  ngOnInit(): void {
  }

}
