import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { DogService } from 'src/app/services/dog.service';
import Dog from 'src/app/models/Dog';

@Component({
  selector: 'app-dog-create',
  templateUrl: './dog-create.component.html',
  styleUrls: ['./dog-create.component.css'],
})
export class DogCreateComponent {
  constructor(private fb: FormBuilder, private dogService: DogService) {}

  // dog?: Dog;

  formResult?: string;

  regexURL: string = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

  createForm = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    headerImg: [''],
    srcImg: [''],
    // headerImg: ['', Validators.required],
    // srcImg: ['', Validators.required],
    // headerImg: ['', [Validators.required, Validators.pattern(this.regexURL)]],
    // srcImg: ['', [Validators.required, Validators.pattern(this.regexURL)]],
  });

  onSubmitForm() {
    if (this.createForm.dirty && this.createForm.valid) {
      let dog: Dog = new Dog();

      dog = Object.assign({}, dog, this.createForm.value);
      this.formResult = JSON.stringify(dog);

      this.dogService.postDogs(dog);
    }
  }
}
