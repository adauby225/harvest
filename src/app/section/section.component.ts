import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  title: string = 'Deuxieme mini moisson';
  theme: string = 'Dieu d\'abord'
  description: string = 'Liste des ventes et achat(s) prévu pour la deuxième mini moisson';
  constructor() { }

  ngOnInit(): void {
  }

}
