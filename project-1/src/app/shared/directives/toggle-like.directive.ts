import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[toggleLike]',
})
export class ToggleLikeDirective implements OnChanges {
  @Input()
  toggleLike: boolean | undefined;

  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.toggleLike) {
      this.el.nativeElement.innerHTML = 'favorite';
      this.el.nativeElement.style.color = '#ed4956';
    } else {
      this.el.nativeElement.innerHTML = 'favorite_border';
      this.el.nativeElement.style.color = '#262626';
    }
  }
}
