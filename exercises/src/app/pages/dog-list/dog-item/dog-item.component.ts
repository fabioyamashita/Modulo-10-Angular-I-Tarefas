import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import Dog from 'src/app/models/Dog';

@Component({
  selector: 'app-dog-item',
  templateUrl: './dog-item.component.html',
  styleUrls: ['./dog-item.component.css'],
})
export class DogItemComponent implements AfterViewInit {
  @ViewChild('headercomponent', { read: ElementRef }) el!: ElementRef;

  ngAfterViewInit(): void {}

  @Input() dog: Dog = {
    title: 'Dog not specified',
    headerImg: '',
    srcImg: '',
    description: '',
    visited: false,
    lastSeen: new Date(),
    liked: false,
  };

  handleEvents(): void {
    this.checkVisited();

    if (!this.el.nativeElement.classList.contains('mat-expanded'))
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
}
