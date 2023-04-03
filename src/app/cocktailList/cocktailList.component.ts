import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { Cocktail } from '../models/cocktail.model';

@Component({
  selector: 'app-cocktailList',
  templateUrl: './cocktailList.component.html',
  styleUrls: ['./cocktailList.component.css'],
})
export class CocktailListComponent implements OnInit {
  list: Cocktail[];

  constructor(public CocktailService: CocktailService) {
    this.list = [];
  }

  ngOnInit() {
    this.CocktailService.getCocktails().subscribe((data) => {
      this.list = data;
    });
  }
}
