import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

import { DogListComponent } from './dog-list/dog-list.component';
import { DogItemComponent } from './dog-list/dog-item/dog-item.component';

@NgModule({
  declarations: [DogListComponent, DogItemComponent],
  imports: [CommonModule, MaterialModule],
  exports: [DogListComponent, DogItemComponent],
})
export class PagesModule {}
