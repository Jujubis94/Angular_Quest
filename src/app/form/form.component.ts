import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Onomatopoeia } from '../models/onomotoepiaList.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  model : Onomatopoeia = new Onomatopoeia('')
  constructor() { }

  ngOnInit() {
  }

  @Output() OnomatopiaToParent: EventEmitter<Onomatopoeia> = new EventEmitter(); 
  
  onSubmit() {
    const newOnomatopoeia = new Onomatopoeia(this.model.name);
    this.OnomatopiaToParent.emit(newOnomatopoeia);
    this.model.name = ''
  }
  
}
