import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { DialogConfirmDeleteComponent } from './dialog-confirm-delete/dialog-confirm-delete.component';

import Dog from 'src/app/models/Dog';
import { DogService } from 'src/app/services/dog.service';
import { DogEditComponent } from '../../dog-edit/dog-edit.component';

@Component({
  selector: 'app-dog-item',
  templateUrl: './dog-item.component.html',
  styleUrls: ['./dog-item.component.css'],
})
export class DogItemComponent implements AfterViewInit {
  constructor(private dogService: DogService, private dialog: MatDialog) {}

  @ViewChild('headercomponent', { read: ElementRef }) headerEl!: ElementRef;

  ngAfterViewInit(): void {}

  @Input() dog: Dog = {
    id: new Date().getTime(),
    title: 'Dog not specified',
    srcImg:
      'https://images.unsplash.com/photo-1523480717984-24cba35ae1ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    headerImg:
      'https://images.unsplash.com/photo-1625794084867-8ddd239946b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    description: '',
    visited: false,
    lastSeen: new Date(),
    liked: false,
  };

  handleEvents(): void {
    this.checkVisited();

    if (!this.headerEl.nativeElement.classList.contains('mat-expanded'))
      this.updateLastSeen();
  }

  checkVisited(): void {
    if (this.dog.visited) return;
    this.dog.visited = true;
  }

  updateLastSeen(): void {
    this.dog.lastSeen = new Date();
  }

  toggleLike(): void {
    this.dog.liked = !this.dog.liked;
  }

  deleteDog(): void {
    this.dogService.deleteDog(this.dog.id);
  }

  updateDog(updatedData: Object): void {
    this.dogService.updateDog(this.dog.id, updatedData);
  }

  openDeleteDialog(): void {
    this.dialog
      .open(DialogConfirmDeleteComponent, {
        width: '300px',

        data: {
          name: this.dog.title,
        },
      })
      .afterClosed()
      .subscribe((result) => {
        if (result) this.deleteDog();
      });
  }

  openEditDialog(): void {
    this.dialog
      .open(DogEditComponent, {
        data: {
          title: this.dog.title,
          description: this.dog.description,
          headerImg: this.dog.headerImg,
          scrImg: this.dog.srcImg,
        },
      })
      .afterClosed()
      .subscribe((result) => {
        if (result) this.updateDog(result);
      });
  }
}
