import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'visited',
})
export class VisitedPipe implements PipeTransform {
  transform(visited: boolean): string {
    return visited ? 'Dog visited' : 'Dog not visited';
  }
}
