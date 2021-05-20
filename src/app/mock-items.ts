import { Article } from './article';

export const ARTICLES: Article[] = [
  {
    name : 'Vente d\'Eau',
    price : 1000,
    quantity : "Nombre de bouteilles disponibles :100",
    description: '',
    unit: 'Bouteille (0,5L)',
    imgName: '/../assets/images/water.webp'
  },
  {
    name : 'Vente de Kit lait miel',
    price : 5000,
    quantity : "Nombre de kits disponibles : 30",
    description: '',
    unit: 'Kit',
    imgName: '/../assets/images/honey-milk.jpg'
  },
  {
    name : 'Vente de Pain',
    price : 2000,
    quantity : "Nombre de pains disponibles : 50",
    description: '',
    unit: 'Pain',
    imgName: '/../assets/images/bread.jpg'
  },
  {
    name : 'Vente de Kit enfants',
    price : 3000,
    quantity : "Nombre de kits disponibles : 50",
    description: '',
    unit: 'Pain',
    imgName: ''
  },
  {
    name : 'Achat de Carreau',
    price : 8000,
    quantity : "Superficie à couvrir : 400 m²" ,
    description: "Cet achat a pour but d'amener le peuple de Dieu prendre en charge l'achat des carreaux afin de poursuivre\
     la construction du temple.\
     ",
    unit: 'm²',
    imgName: '/../assets/images/carreaux.jpg'
  }
];
