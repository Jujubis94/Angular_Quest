import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Onomatopoeia } from '../models/onomotoepiaList.model';
import { NgForm } from '@angular/forms';

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
    this.OnomatopiaToParent.emit(this.model);
  }
}
