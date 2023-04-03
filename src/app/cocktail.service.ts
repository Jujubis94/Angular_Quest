import { Injectable } from '@angular/core';
import { Cocktail } from './models/cocktail.model';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
cocktails : Cocktail[] = [
  new Cocktail('mojito', 8, 'https://www.1001cocktails.com/wp-content/uploads/1001cocktails/2023/03/80255_origin-scaled.jpg'),
  new Cocktail('aqua velva', 0, 'https://www.destinationcocktails.fr/wp-content/uploads/2022/04/cocktail-aqua-velva.jpg'),
  new Cocktail('margarita', 5, 'https://resize.elle.fr/original/var/plain_site/storage/images/elle-a-table/recettes-de-cuisine/margarita-2037408/9397186-12-fre-FR/Margarita.jpg'),
]
constructor() { }

getCocktails(): Cocktail[] {
  return this.cocktails
}
}
