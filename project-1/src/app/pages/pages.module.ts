import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DogListComponent } from './dog-list/dog-list.component';
import { DogItemComponent } from './dog-list/dog-item/dog-item.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { DogCreateComponent } from './dog-create/dog-create.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DogListComponent,
    DogItemComponent,
    PageNotFoundComponent,
    DogCreateComponent,
  ],
  imports: [CommonModule, MaterialModule, SharedModule, ReactiveFormsModule],
  exports: [DogListComponent, DogItemComponent],
})
export class PagesModule {}
