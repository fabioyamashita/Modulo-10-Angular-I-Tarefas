import { Component, OnInit } from '@angular/core';

import { DogService } from 'src/app/services/dog.service';

import Dog from 'src/app/models/Dog';

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css'],
})
export class DogListComponent implements OnInit {
  constructor(private dogService: DogService) {}

  dogList: Dog[] = [];

  ngOnInit(): void {
    this.dogService.getDogs().subscribe({
      next: (dogs) => (this.dogList = dogs),
      error: (error) => console.log(error),
    });
  }
}
