import { getLocaleEraNames } from '@angular/common';
import { Component, Input } from '@angular/core';
import Dog from 'src/app/models/Dog';

@Component({
  selector: 'app-dog-item',
  templateUrl: './dog-item.component.html',
  styleUrls: ['./dog-item.component.css'],
})
export class DogItemComponent {
  @Input() dog: Dog = {
    title: 'Dog not specified',
    subtitle: 'Dog Breed',
    headerImg: '',
    srcImg: '',
    description: '',
  };
}
