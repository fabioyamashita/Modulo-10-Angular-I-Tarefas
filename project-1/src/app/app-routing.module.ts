import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogCreateComponent } from './pages/dog-create/dog-create.component';
import { DogListComponent } from './pages/dog-list/dog-list.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'list', component: DogListComponent },
  { path: 'create', component: DogCreateComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
