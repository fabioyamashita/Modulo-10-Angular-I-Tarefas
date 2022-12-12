import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { DogService } from 'src/app/services/dog.service';
import Dog from 'src/app/models/Dog';

@Component({
  selector: 'app-dog-create',
  templateUrl: './dog-create.component.html',
  styleUrls: ['./dog-create.component.css'],
})
export class DogCreateComponent {
  constructor(
    private fb: FormBuilder,
    private dogService: DogService,
    private router: Router
  ) {}

  regexURL: RegExp =
    /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;

  createForm = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    headerImg: ['', Validators.pattern(this.regexURL)],
    srcImg: ['', Validators.pattern(this.regexURL)],
  });

  redirectToListPage() {
    this.router.navigateByUrl('/list');
  }

  onSubmitForm() {
    if (this.createForm.dirty && this.createForm.valid) {
      let dog: Dog = new Dog();

      dog = Object.assign({}, dog, this.createForm.value);
      this.dogService.postDogs(dog).subscribe();

      this.redirectToListPage();
    }
  }
}
