import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Onomatopoeia } from '../models/onomotoepiaList.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  model : Onomatopoeia = new Onomatopoeia()
  constructor() { }

  ngOnInit() {
  }

  @Output() OnomatopiaToParent: EventEmitter<Onomatopoeia> = new EventEmitter(); 
  
  onSubmit() {
    // premiere methode je déclare une nouvelle instance (case memoire) 
    // avec la valeur du model initial puis je l'envoie

    const newOnomatopoeia = new Onomatopoeia(this.model.name);
    this.OnomatopiaToParent.emit(newOnomatopoeia);
    this.model.name = ''

    // ou 
    // this.model = new Onomatopoeia()


    // seconde methode j'envoie le model puis je créé une nouvelle instance
    // (fleche vers une nouvelle case mémoire) pour dissocier les valeurs de model
    // this.OnomatopiaToParent.emit(this.model);
    // this.model = new Onomatopoeia()
  }
}
