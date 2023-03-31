import { Component, OnInit } from '@angular/core';
import { Onomatopoeia } from '../models/onomotoepiaList.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  listOfOnomatopia : Onomatopoeia[] = [
    new Onomatopoeia('aie'),
    new Onomatopoeia('piou piou'),
    new Onomatopoeia('boum'),
  ]
  constructor() { }

  ngOnInit() {
  }

  onReceiveNewOnomatopia(event: Onomatopoeia): void {
    this.listOfOnomatopia.push(event);
  }
}
