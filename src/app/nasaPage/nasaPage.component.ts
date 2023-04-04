import { Component, OnInit } from '@angular/core';
import { Nasa } from '../models/NasaResponse.model';
import { NasaService } from '../NasaService.service';

@Component({
  selector: 'app-nasaPage',
  templateUrl: './nasaPage.component.html',
  styleUrls: ['./nasaPage.component.css']
})
export class NasaPageComponent implements OnInit {
  nasaData: Nasa = new Nasa();

  constructor(private nasaService: NasaService) { }

  ngOnInit() {
    this.nasaService.getImageOfTheDay().subscribe((data) => {
      this.nasaData = data;
    });
  }
}
