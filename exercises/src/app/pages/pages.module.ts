import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

import { DogListComponent } from './dog-list/dog-list.component';
import { DogItemComponent } from './dog-list/dog-item/dog-item.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DogListComponent, DogItemComponent],
  imports: [CommonModule, MaterialModule, SharedModule],
  exports: [DogListComponent, DogItemComponent],
})
export class PagesModule {}
