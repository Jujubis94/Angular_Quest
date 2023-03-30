import { Component, OnInit } from '@angular/core';
import { Developer } from '../models/developer.model';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css'],
})
export class DeveloperComponent implements OnInit {
  developpeur = new Developer(
    'doe',
    'john',
    28,
    'homme',
    'developpeur angular...',
    [
      new Skill(
        'doeInc',
        'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7a3ec529632909.55fc107b84b8c.png',
        'https://site.fr'
      ),
      new Skill(
        'SeconddoeInc',
        'https://media.istockphoto.com/id/1295274245/photo/random-multicolored-spheres-computer-generated-abstract-form-of-large-and-small-balls-3d.jpg?s=612x612&w=0&k=20&c=q7NOl28YxIIOqKu6em50VlKrg6ISFyVww_nLOCr5W_A=',
        'https://second-site.fr'
      ),
    ]
  );
  constructor() {}

  ngOnInit() {}
}
