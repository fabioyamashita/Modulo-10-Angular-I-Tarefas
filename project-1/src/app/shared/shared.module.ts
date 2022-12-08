import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';

import { HeaderComponent } from './header/header.component';

import { VisitedPipe } from './pipes/visited.pipe';
import { ToggleLikeDirective } from './directives/toggle-like.directive';

@NgModule({
  declarations: [HeaderComponent, VisitedPipe, ToggleLikeDirective],
  imports: [CommonModule, MaterialModule],
  exports: [HeaderComponent, VisitedPipe, ToggleLikeDirective],
})
export class SharedModule {}
